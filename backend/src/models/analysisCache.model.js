import mongoose from "mongoose";

const analysisCacheSchema = new mongoose.Schema(
{
  text: {
    type: String,
    required: true,
    unique: true
  },

  emotion: String,

  keywords: [String],

  summary: String
},
{ timestamps: true }
);

export default mongoose.model("AnalysisCache", analysisCacheSchema);