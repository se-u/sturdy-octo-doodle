import { Client, Databases, Account } from "appwrite";
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('666846db000c6c3d312a');

export const account = new Account(client);
export const databases = new Databases(client);