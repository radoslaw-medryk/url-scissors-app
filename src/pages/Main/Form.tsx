import * as React from "react";
import { MainFormSubmit } from "./FormSubmit";
import { MainFormLayout } from "./FormLayout";
import { MainFormInput } from "./FormInput";
import { Loader } from "src/components/Loader";
import { ErrorText } from "../../components/ErrorText";

export type MainFormProps = {
    onSubmit?: (value: string) => void;
    isLoading?: boolean;
    error?: string;
};

export const MainForm: React.SFC<MainFormProps> = ({ onSubmit, isLoading, error }) => {
    const [value, setValue] = React.useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit && onSubmit(value);
    };

    return (
        <MainFormLayout onSubmit={onFormSubmit}>
            <MainFormInput type="url" value={value} onChange={onChange} />
            {isLoading ? <Loader className="loader" /> : <MainFormSubmit type="submit" value="Cut!" />}
            <ErrorText>{error}</ErrorText>
        </MainFormLayout>
    );
};
