import dotenv from "dotenv";

async function globalSetup(): Promise<void> {
    dotenv.config();

    for(const variable of ["HOST_URL"]) {
        if (!process.env[variable]) {
            throw new Error(`Environment variable ${variable} is missing!`);
        }
    }
}

export default globalSetup;