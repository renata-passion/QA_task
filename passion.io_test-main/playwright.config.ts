import { PlaywrightTestConfig } from "@playwright/test"
const config: PlaywrightTestConfig = {
    globalSetup: require.resolve("./global-setup"),
    workers: 1,
    use: {
        headless: true,
        viewport: { width: 2560, height: 1440 },
        screenshot: "only-on-failure",
    },
    timeout: 20000,
};
export default config;