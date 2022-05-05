import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Tables from "../components/Tables/";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/table" element={<Tables />} />
        {/* <Route path="/graphs" element={<Graphs />} /> */}
      </Routes>
    </BrowserRouter >
  );
}

export default App;
