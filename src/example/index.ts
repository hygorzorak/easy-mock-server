import express from "express";

import data from "./data.json";

export function getExampleRoutes(app: express.Application): void {
  // GET
  app.get("/example", (req, res) => {
    res.json({ data: data });
  });

  // POST
  app.post("/example", (req, res) => {
    res.json(data);
  });
}
