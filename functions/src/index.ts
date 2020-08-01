import * as functions from "firebase-functions";
import { createConfiguredServer } from "../../src/server";

const app = createConfiguredServer();
export const backend = functions.https.onRequest(app);
