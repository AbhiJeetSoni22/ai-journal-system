# AI-Assisted Journal System

## Overview

The **AI-Assisted Journal System** allows users to write journal entries after completing immersive nature sessions (such as forest, ocean, or mountain environments).
The system stores journal entries and uses an **LLM (Large Language Model)** to analyze the emotional state expressed in the text.

The platform provides insights about the user's emotional trends over time.

This project demonstrates:

* Backend API design
* LLM integration
* Data modeling
* API documentation
* Practical system architecture

---

# Features

### 1. Create Journal Entry

Users can create a journal entry describing their experience after a nature session.

When the entry is created:

* The text is analyzed by an LLM
* Emotion, keywords, and summary are extracted
* Results are stored in the database

---

### 2. Retrieve User Journal Entries

Users can fetch all previously created journal entries.

---

### 3. Emotion Analysis

Journal text is analyzed using an LLM to detect:

* Emotion
* Keywords
* Short summary

---

### 4. Insights API

The system generates insights based on the user's journal history:

* Total journal entries
* Most frequent emotion
* Most used ambience
* Recently used keywords

---

# Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### AI / LLM

* Groq API
* LLaMA3 model

### Documentation

* Swagger (OpenAPI)

### Security / Performance

* Rate limiting
* Caching for LLM responses

---

# Project Structure

```
backend
│
├── src
│
├── config
│   ├── db.js
│   └── swagger.js
│
├── controllers
│   └── journal.controller.js
│
├── services
│   └── journal.service.js
│
├── models
│   ├── journal.model.js
│   └── analysisCache.model.js
│
├── routes
│   └── journal.routes.js
│
├── middleware
│   └── rateLimiter.js
│
├── utils
│   └── llm.js
│
└── server.js
```

---

# Installation & Setup

## 1. Clone Repository

```
git clone <repository-url>
cd ai-journal-system/backend
```

---

## 2. Install Dependencies

```
npm install
```

---

## 3. Setup Environment Variables

Create `.env` file in the backend directory.

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/journalDB
GROQ_API_KEY=your_api_key_here
```

---

## 4. Start Server

```
npm run dev
```

Server will start on:

```
http://localhost:5000
```

---

# API Documentation

Swagger documentation available at:

```
http://localhost:5000/api-docs
```

---

# API Endpoints

### Create Journal Entry

```
POST /api/journal
```

Request:

```
{
  "userId": "123",
  "ambience": "forest",
  "text": "I felt calm today after listening to the rain."
}
```

---

### Get User Entries

```
GET /api/journal/:userId
```

---

### Analyze Journal Text

```
POST /api/journal/analyze
```

---

### Get Insights

```
GET /api/journal/insights/:userId
```

---

# Future Improvements

* Redis based caching
* Authentication system
* Streaming LLM responses
* Real-time emotion analytics
* Dashboard UI

---

# Author

Abhijeet Soni
Full-Stack Developer (MERN)
