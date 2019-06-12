import * as React from "react";
import { RouteComponentProps } from "react-router";
import axios from "axios";
import { configPromise } from "src/config";
import { ErrorText } from "src/components/ErrorText";

export type RedirectPageProps = RouteComponentProps<{ id: string }> & {
    //
};

export const RedirectPage: React.SFC<RedirectPageProps> = ({ match }) => {
    const [longUrl, setLongUrl] = React.useState<string | undefined>(undefined);
    const [error, setError] = React.useState<string | undefined>(undefined);

    const id = match.params.id;

    React.useEffect(() => {
        const fetchLongUrl = async () => {
            try {
                const { baseUrl } = await configPromise;
                const response = await axios.get(`${baseUrl}/api/v1/urls/${id}`);
                setLongUrl(response.data.url);
            } catch (e) {
                console.error(e);
                setError("Something went wrong. Try refreshing the page.");
            }
        };
        fetchLongUrl();
    }, []);

    if (longUrl) {
        window.location.href = longUrl;
    }

    if (error) {
        return <ErrorText>{error}</ErrorText>;
    }

    return <p>Redirecting, please wait...</p>;
};
