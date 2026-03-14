import { useState } from "react";
import { createJournal } from "../services/api";

export default function JournalForm({ refresh }) {

  const [text, setText] = useState("");
  const [ambience, setAmbience] = useState("forest");

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!text) return;

    await createJournal({
      userId: "123",
      ambience,
      text
    });

    setText("");

    refresh();

  };

  return (

    <div className="bg-white rounded-xl shadow-md p-6 mb-6">

      <h2 className="text-xl font-semibold mb-4">
        Write Journal Entry
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <textarea
          rows="4"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="Write your thoughts..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <select
          className="border rounded-lg p-2 mr-2"
          value={ambience}
          onChange={(e) => setAmbience(e.target.value)}
        >

          <option value="forest">🌲 Forest</option>
          <option value="ocean">🌊 Ocean</option>
          <option value="mountain">⛰ Mountain</option>

        </select>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Save Entry
        </button>

      </form>

    </div>

  );
}