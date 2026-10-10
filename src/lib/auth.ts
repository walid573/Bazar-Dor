
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const mongoUrl = process.env.BETTER_AUTH_DB_URL;
const baseURL = process.env.BETTER_AUTH_URL;

if (!mongoUrl) {
    throw new Error("BETTER_AUTH_DB_URL is missing");
}

if (!baseURL) {
    throw new Error("BETTER_AUTH_URL is missing");
}

const client = new MongoClient(mongoUrl);
const db = client.db("Bazar-Dor");

export const auth = betterAuth({
    baseURL,

    database: mongodbAdapter(db, {
        client,
    }),

    emailAndPassword: {
        enabled: true,
    },

    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        },

        github: {
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        },
    },
});