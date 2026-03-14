export default function EntryList({ entries = [] }) {

  const emotionColor = (emotion) => {

    switch (emotion) {

      case "calm":
        return "bg-green-100 text-green-700";

      case "happy":
        return "bg-yellow-100 text-yellow-700";

      case "sad":
        return "bg-blue-100 text-blue-700";

      default:
        return "bg-gray-100 text-gray-700";

    }

  };

  return (

    <div className="bg-white rounded-xl shadow-md p-6 mb-6">

      <h2 className="text-xl font-semibold mb-4">
        Previous Entries
      </h2>

      {entries.length === 0 && (

        <p className="text-gray-500">No entries yet.</p>

      )}

      {entries.map((entry) => (

        <div
          key={entry._id}
          className="border-b py-4 last:border-none"
        >

          <p className="font-medium mb-2">
            {entry.text}
          </p>

          <div className="flex flex-wrap items-center gap-2 mb-2">

            <span
              className={`px-2 py-1 text-sm rounded ${emotionColor(entry.emotion)}`}
            >
              {entry.emotion}
            </span>

            <span className="text-sm text-gray-500">
              {entry.ambience}
            </span>

          </div>

          <div className="flex flex-wrap gap-2">

            {entry.keywords?.map((k, i) => (

              <span
                key={i}
                className="text-xs bg-gray-200 px-2 py-1 rounded"
              >
                {k}
              </span>

            ))}

          </div>

        </div>

      ))}

    </div>

  );
}