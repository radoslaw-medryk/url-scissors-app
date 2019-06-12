import * as React from "react";
import { MainLayout } from "./Layout";
import { MainLogo } from "../../components/Logo";
import { MainForm } from "./Form";
import axios from "axios";
import { configPromise } from "src/config";
import { MainShortUrl } from "./ShortUrl";

export type MainPageProps = {
    //
};

export const MainPage: React.SFC<MainPageProps> = props => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [submittedUrl, setSubmittedUrl] = React.useState<string | undefined>(undefined);
    const [error, setError] = React.useState<string | undefined>(undefined);
    const [shortId, setShortId] = React.useState<string | undefined>(undefined);

    React.useEffect(() => {
        const onSubmittedUrlChanged = async () => {
            if (!submittedUrl) {
                return;
            }

            try {
                setError(undefined);
                setIsLoading(true);

                const { baseUrl } = await configPromise;
                const response = await axios.post(`${baseUrl}/api/v1/urls`, {
                    url: submittedUrl,
                });

                setShortId(response.data.id);
            } catch (e) {
                console.error(e);
                setError("Unknown error occured. Please try again.");
            }

            setIsLoading(false);
        };
        onSubmittedUrlChanged();
    }, [submittedUrl]);

    const onSubmit = (url: string) => {
        if (isLoading) {
            return;
        }

        setSubmittedUrl(url);
    };

    return (
        <MainLayout>
            <MainLogo />
            {shortId ? (
                <MainShortUrl>{`${window.location.origin}/u/${shortId}`}</MainShortUrl>
            ) : (
                <MainForm isLoading={isLoading} onSubmit={onSubmit} error={error} />
            )}
        </MainLayout>
    );
};
