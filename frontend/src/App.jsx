import { useEffect, useState } from "react";
import JournalForm from "./components/JournalForm";
import EntryList from "./components/EntryList";
import Insights from "./components/Insights";
import { getEntries, getInsights } from "./services/api";

export default function App() {

  const userId = "123";

  const [entries, setEntries] = useState([]);
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {

    try {

      const entryRes = await getEntries(userId);
      setEntries(entryRes.data || []);

      const insightRes = await getInsights(userId);
      setInsights(insightRes.data);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {
    loadData();
  }, []);

  return (

    <div className="min-h-screen bg-gray-100">

      <div className="max-w-3xl mx-auto p-6">

        <h1 className="text-4xl font-bold text-center mb-8">
          🌿 AI Journal System
        </h1>

        <JournalForm refresh={loadData} />

        {loading ? (

          <p className="text-center mt-6">Loading...</p>

        ) : (

          <>
            <EntryList entries={entries} />
            <Insights insights={insights} />
          </>

        )}

      </div>

    </div>

  );
}