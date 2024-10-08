import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MatchDetails from './components/MatchDetails';
import TopPlayers from './components/TopPlayers';
import MatchesByDateRange from './components/MatchesByDateRange';
import Form from './components/Form';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/home" element={<Home />} />
        <Route path="/match-details" element={<MatchDetails />} />
        <Route path="/top-players" element={<TopPlayers />} />
        <Route path="/matches-by-date-range" element={<MatchesByDateRange />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
