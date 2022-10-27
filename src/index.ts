import express from "express";
import cors from "cors";

import { getExampleRoutes } from "./example";

const port = 4480;
const app = express();

app.set("json spaces", 2);
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from an Express mock server");
});

getExampleRoutes(app);

app.listen(port, () => {
  console.log("listening from port: ", port);
});
