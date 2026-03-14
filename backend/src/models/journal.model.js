import mongoose from "mongoose";

const journalSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true
    },

    ambience: {
      type: String,
      enum: ["forest", "ocean", "mountain"],
      required: true
    },

    text: {
      type: String,
      required: true
    },

    emotion: {
      type: String,
      default: null
    },

    keywords: {
      type: [String],
      default: []
    },

    summary: {
      type: String,
      default: null
    }
  },
  {
    timestamps: true
  }
);

const Journal = mongoose.model("Journal", journalSchema);

export default Journal;