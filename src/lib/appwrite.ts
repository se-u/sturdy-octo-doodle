import { Account, Client, Databases } from "appwrite";
import { ENDPOINT, PROJECT_ID } from "../modules/constant";
const client = new Client();

client.setEndpoint(ENDPOINT).setProject(PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
