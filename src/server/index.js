const express = require("express");
const os = require("os");
const incidentRouter = require("./routes/incident-router");

const app = express();

app.use(express.static("dist"));
app.use(express.json());

app.use("/api/incident", incidentRouter);

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
