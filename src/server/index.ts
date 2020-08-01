import { Express } from "express";

export interface APIIndexRouteResponse {
  message: string;
}

export async function configureServer(app: Express) {
  app.get("/api", (_, res) => {
    const response = { message: "Hello world!" } as APIIndexRouteResponse;
    res.json(response);
  });
}
