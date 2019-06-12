import * as React from "react";

const logoSvg = require("src/assets/images/logo.svg");

const defaultSize = 128;

export type MainLogoProps = {
    size?: number;
};

export const MainLogo: React.SFC<MainLogoProps> = ({ size }) => (
    <img src={logoSvg} width={size || defaultSize} height={size || defaultSize} />
);
