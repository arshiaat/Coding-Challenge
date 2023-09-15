import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PodcastSearch from "./componenets/PodcastSearch";
import PodcastList from "./componenets/PodcastList";
import PodcastEpisodes from "./componenets/PodcastEpisodes";

function App() {
  const [podcasts, setPodcasts] = useState([]);

  const handlePodcastsFetched = (fetchedPodcasts) => {
    setPodcasts(fetchedPodcasts);
  };

  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <PodcastSearch onPodcastsFetched={handlePodcastsFetched} />
                <PodcastList podcasts={podcasts} />
              </div>
            }
          />

          <Route path="/podcast/:collectionId" element={<PodcastEpisodes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
