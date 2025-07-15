import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FindAdvisorPage from './pages/FindAdvisorPage';
import Layout from './components/Layout';

const App: React.FC = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/find-advisor" element={<FindAdvisorPage />} />
    </Route>
  </Routes>
);

export default App;
