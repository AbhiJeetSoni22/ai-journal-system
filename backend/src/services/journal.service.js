import Journal from "../models/journal.model.js";
import { analyzeJournal } from "../utils/llm.js";
import AnalysisCache from "../models/analysisCache.model.js";

export const createJournalEntry = async ({ userId, ambience, text }) => {

  // check cache
  let analysis = await AnalysisCache.findOne({ text });

  if (!analysis) {

    const result = await analyzeJournal(text);

    analysis = await AnalysisCache.create({
      text,
      emotion: result.emotion,
      keywords: result.keywords,
      summary: result.summary
    });

  }

  const entry = await Journal.create({
    userId,
    ambience,
    text,
    emotion: analysis.emotion,
    keywords: analysis.keywords,
    summary: analysis.summary
  });

  return entry;
};

export const getUserEntries = async (userId) => {
  return await Journal.find({ userId }).sort({ createdAt: -1 });
};


export const getInsights = async (userId) => {

  const entries = await Journal.find({ userId });

  const totalEntries = entries.length;

  if (totalEntries === 0) {
    return {
      totalEntries: 0,
      topEmotion: null,
      mostUsedAmbience: null,
      recentKeywords: []
    };
  }

  const emotionCount = {};
  const ambienceCount = {};
  const keywordList = [];

  entries.forEach(entry => {

    if (entry.emotion) {
      emotionCount[entry.emotion] =
        (emotionCount[entry.emotion] || 0) + 1;
    }

    if (entry.ambience) {
      ambienceCount[entry.ambience] =
        (ambienceCount[entry.ambience] || 0) + 1;
    }

    if (entry.keywords && entry.keywords.length > 0) {
      keywordList.push(...entry.keywords);
    }

  });

  let topEmotion = null;

  if (Object.keys(emotionCount).length > 0) {
    topEmotion = Object.keys(emotionCount).reduce((a, b) =>
      emotionCount[a] > emotionCount[b] ? a : b
    );
  }

  let mostUsedAmbience = null;

  if (Object.keys(ambienceCount).length > 0) {
    mostUsedAmbience = Object.keys(ambienceCount).reduce((a, b) =>
      ambienceCount[a] > ambienceCount[b] ? a : b
    );
  }

  const recentKeywords = [...new Set(keywordList)].slice(0, 5);

  return {
    totalEntries,
    topEmotion,
    mostUsedAmbience,
    recentKeywords
  };
};