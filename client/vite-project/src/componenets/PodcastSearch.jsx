import React, { useState } from "react";
import axios from "axios";

function PodcastSearch({ onPodcastsFetched }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://itunes.apple.com/search?media=podcast&term=${searchTerm}`
      );
      console.log("Podcast data:", response.data.results);
      onPodcastsFetched(response.data.results);
    } catch (error) {
      console.error("Error fetching podcast data:", error);
    }
  };
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold mb-4">Podcast Search</h1>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Search for podcasts..."
          className="border p-2 rounded-l w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-700"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default PodcastSearch;
