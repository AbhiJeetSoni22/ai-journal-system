import express from "express";
import { createEntry, getEntries } from "../controllers/journal.controller.js";
import { analyzeEntry } from "../controllers/journal.controller.js";
import { getUserInsights } from "../controllers/journal.controller.js";

const router = express.Router();

/**
 * @swagger
 * /api/journal:
 *   post:
 *     summary: Create a new journal entry
 *     description: Create a journal entry and analyze it using LLM to extract emotion, keywords, and summary.
 *     tags:
 *       - Journal
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - ambience
 *               - text
 *             properties:
 *               userId:
 *                 type: string
 *                 example: "123"
 *               ambience:
 *                 type: string
 *                 example: "forest"
 *               text:
 *                 type: string
 *                 example: "I felt calm today after listening to the rain."
 *     responses:
 *       201:
 *         description: Journal entry created successfully
 *       500:
 *         description: Server error
 */
router.post("/journal", createEntry);


/**
 * @swagger
 * /api/journal/{userId}:
 *   get:
 *     summary: Get all journal entries for a user
 *     description: Fetch all journal entries associated with a specific user ID.
 *     tags:
 *       - Journal
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         example: "123"
 *     responses:
 *       200:
 *         description: List of journal entries
 *       500:
 *         description: Server error
 */
router.get("/journal/:userId", getEntries);


/**
 * @swagger
 * /api/journal/analyze:
 *   post:
 *     summary: Analyze journal text
 *     description: Use an LLM to analyze the journal text and extract emotion, keywords, and summary.
 *     tags:
 *       - Journal
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - text
 *             properties:
 *               text:
 *                 type: string
 *                 example: "I felt calm today after listening to the rain."
 *     responses:
 *       200:
 *         description: Analysis result returned successfully
 *       500:
 *         description: Server error
 */
router.post("/journal/analyze", analyzeEntry);


/**
 * @swagger
 * /api/journal/insights/{userId}:
 *   get:
 *     summary: Get journal insights
 *     description: Returns aggregated insights for a user's journal entries including top emotion, most used ambience, and keywords.
 *     tags:
 *       - Journal
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         example: "123"
 *     responses:
 *       200:
 *         description: Insights generated successfully
 *       500:
 *         description: Server error
 */
router.get("/journal/insights/:userId", getUserInsights);

export default router;