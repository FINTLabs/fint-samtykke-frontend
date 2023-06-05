export interface AppConfig {
    baseUrl: string;
}
export interface EnvironmentUrls {
    [env: string]: AppConfig;
}
export const envConfig: EnvironmentUrls = {
    dev: {
        // https://dev.docker.internal For docker
        baseUrl: 'https://localhost:3001',
    },
    ci: {
        baseUrl: 'https://',
    },
    pr: {
        baseUrl: 'https://',
    },
    prod: {
        baseUrl: 'https://',
    }
};