import axios from "axios";

export type Config = {
    baseUrl: string;
};

const defaultConfig: Config = require("../configs/dev-config.json");

export const configPromise = axios
    .get("/config.json")
    .then(response => {
        return response.data as Config;
    })
    .catch(e => {
        console.warn("Get /config.json failed, fallback to defaults.", e);
        return defaultConfig;
    });
