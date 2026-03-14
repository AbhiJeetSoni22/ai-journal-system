import { createJournalEntry, getUserEntries } from "../services/journal.service.js";
import { analyzeJournal } from "../utils/llm.js";
import { getInsights } from "../services/journal.service.js";


/**
 * Create new journal entry
 * @route POST /journal
 */
export const createEntry = async (req, res) => {
  try {
    const { userId, ambience, text } = req.body;

    const entry = await createJournalEntry({
      userId,
      ambience,
      text
    });

    res.status(201).json(entry);
  } catch (error) {
    res.status(500).json({
      message: "Error creating journal entry",
      error: error.message
    });
  }
};

/**
 * Get all entries for a user
 * @route GET /journal/:userId
 */
export const getEntries = async (req, res) => {
  try {
    const { userId } = req.params;

    const entries = await getUserEntries(userId);

    res.json(entries);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching entries"
    });
  }
};

/**
 * Analyze journal entry using LLM
 */
export const analyzeEntry = async (req, res) => {
  try {
    const { text } = req.body;

    const analysis = await analyzeJournal(text);

    res.json(analysis);

  } catch (error) {
    res.status(500).json({
      message: "LLM analysis failed",
      error: error.message
    });
  }
};

export const getUserInsights = async (req, res) => {
  try {

    const { userId } = req.params;

    const insights = await getInsights(userId);

    res.json(insights);

  } catch (error) {

    res.status(500).json({
      message: "Error generating insights",
      error: error.message
    });

  }
};