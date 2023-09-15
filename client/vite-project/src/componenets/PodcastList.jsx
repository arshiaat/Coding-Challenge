import React from "react";
import { Link } from "react-router-dom";

function PodcastList({ podcasts }) {
  return (
    <div className="bg-gray-900 p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Podcasts</h2>
      <div className="grid grid-cols-2 gap-4">
        {podcasts.map((podcast) => (
          <div
            key={podcast.collectionId}
            className="bg-white rounded-lg p-4 text-gray-800"
          >
            <Link
              to={`/podcast/${podcast.collectionId}`}
              className="text-lg hover:underline"
            >
              {podcast.collectionName} - {podcast.artistName}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PodcastList;
