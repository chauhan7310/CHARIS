const Consultation = require("../models/Consultation");

// POST /consultation
const submitConsultation = async (req, res) => {
  try {
    const consultation = await Consultation.create({
      user: req.user.id,
      recipient: req.body.recipient,
      relationship: req.body.relationship,
      occasion: req.body.occasion,
      budget: req.body.budget,
      personality: req.body.personality,
      interests: req.body.interests,
      emotion: req.body.emotion,
    });

    res.status(201).json({
      success: true,
      message: "Consultation Submitted Successfully",
      data: consultation,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// GET /consultation/my
const getMyConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      total: consultations.length,
      data: consultations,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  submitConsultation,
  getMyConsultations,
};