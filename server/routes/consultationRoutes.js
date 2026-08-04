const express = require("express");

const protect = require("../middleware/authMiddleware");

const {
  submitConsultation,
  getMyConsultations,
} = require("../controllers/consultationController");

const router = express.Router();

router.post("/", protect, submitConsultation);

router.get("/my", protect, getMyConsultations);

module.exports = router;