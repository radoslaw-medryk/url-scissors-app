import { styled } from "linaria/react";

export const MainLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    & > img {
        margin-top: 60px;
    }

    & > form {
        margin-top: 60px;
    }
`;
