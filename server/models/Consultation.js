const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    recipient: {
      type: String,
      required: true,
    },

    relationship: {
      type: String,
      required: true,
    },

    occasion: {
      type: String,
      required: true,
    },

    budget: {
      type: String,
      required: true,
    },

    personality: {
      type: String,
      required: true,
    },

    interests: {
      type: String,
      required: true,
    },

    emotion: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Consultation", consultationSchema);