import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FindAdvisorPage from './pages/FindAdvisorPage';

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/find-advisor" element={<FindAdvisorPage />} />
  </Routes>
);

export default App;
