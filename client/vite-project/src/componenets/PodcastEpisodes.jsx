import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PodcastEpisodes() {
  const { collectionId } = useParams();
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await axios.get(
          `https://itunes.apple.com/lookup?id=${collectionId}&entity=podcastEpisode`
        );
        setEpisodes(response.data.results);
      } catch (error) {
        console.error("Error fetching podcast episodes:", error);
      }
    };

    fetchEpisodes();
  }, [collectionId]);

  return (
    <div className="bg-gray-900 p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Podcast Episodes</h2>
      <div className="grid grid-cols-2 gap-4">
        {episodes.map((episode) => (
          <div
            key={episode.trackId}
            className="bg-white rounded-lg p-4 text-gray-800"
          >
            <strong className="text-lg">{episode.trackName}</strong>
            <p className="text-sm text-gray-600">{episode.releaseDate}</p>
            <p className="text-gray-700">{episode.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PodcastEpisodes;
