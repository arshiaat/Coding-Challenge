const express = require("express");
const podcastController = require("../controllers/podcastController");

const router = express.Router();

router.get("/search", podcastController.searchPodcasts);

module.exports = router;
