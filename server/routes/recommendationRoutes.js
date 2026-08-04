const express = require("express");

const {
  getRecommendations,
  getRecommendationById,
} = require("../controllers/recommendationController");

const router = express.Router();

router.get("/", getRecommendations);

router.get("/:id", getRecommendationById);

module.exports = router;