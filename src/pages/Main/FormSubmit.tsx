import { styled } from "linaria/react";

export const MainFormSubmit = styled.input`
    background: var(--primary);
    color: var(--light);
    font-size: 16px;
    padding: 10px 40px;
    border: 0;
    border-radius: 999px;

    &:hover {
        filter: brightness(95%);
    }

    &:active {
        filter: brightness(90%);
    }
`;
