import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LineChart from '../components/Graphs';
import Tables from "../components/Tables/";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/table" element={<Tables />} />
        <Route path="/graphs" element={<LineChart />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
