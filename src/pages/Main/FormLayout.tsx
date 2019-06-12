import { styled } from "linaria/react";

export const MainFormLayout = styled.form`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    & > input[type="submit"] {
        margin-top: 20px;
    }

    & > .loader {
        margin-top: 35px;
    }
`;
