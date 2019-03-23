const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/:incidentId", function(req, res, next) {
  const incidentId = req.params.incidentId;

  // Async load incident file
  const incidentFile = path.join(__dirname, `../data/${incidentId}.json`);

  fs.readFile(incidentFile, (err, data) => {
    if (err) {
      res.sendStatus(404);
      throw err;
    }

    const incident = JSON.parse(data);

    res.json(incident);
  });
});

module.exports = router;
