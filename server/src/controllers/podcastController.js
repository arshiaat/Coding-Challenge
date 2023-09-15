const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/search", async (req, res) => {
  try {
    const searchTerm = req.query.term;

    const apiUrl = `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?media=podcast&term=${searchTerm}`;
    console.log("Sending a request to the iTunes API with URL:", apiUrl);

    const response = await axios.get(apiUrl);

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching podcast data:", error);
    res.status(500).json({ error: "Failed to fetch podcast data" });
  }
});

module.exports = router;
