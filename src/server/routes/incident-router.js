const express = require("express");
const router = express.Router();

router.get("/:incidentId", function(req, res, next) {
  const incidentId = req.params.incidentId;
  res.json({ got: incidentId });
});

module.exports = router;
