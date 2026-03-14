export default function Insights({ insights }) {

  if (!insights) return null;

  return (

    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-xl font-semibold mb-4">
        Insights
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-gray-50 p-4 rounded">

          <p className="text-sm text-gray-500">
            Total Entries
          </p>

          <p className="text-2xl font-bold">
            {insights.totalEntries}
          </p>

        </div>

        <div className="bg-gray-50 p-4 rounded">

          <p className="text-sm text-gray-500">
            Top Emotion
          </p>

          <p className="text-2xl font-bold">
            {insights.topEmotion || "N/A"}
          </p>

        </div>

        <div className="bg-gray-50 p-4 rounded col-span-2">

          <p className="text-sm text-gray-500 mb-2">
            Most Used Ambience
          </p>

          <p className="font-semibold">
            {insights.mostUsedAmbience || "N/A"}
          </p>

        </div>

        <div className="bg-gray-50 p-4 rounded col-span-2">

          <p className="text-sm text-gray-500 mb-2">
            Recent Keywords
          </p>

          <div className="flex flex-wrap gap-2">

            {insights.recentKeywords?.map((k, i) => (

              <span
                key={i}
                className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm"
              >
                {k}
              </span>

            ))}

          </div>

        </div>

      </div>

    </div>

  );
}