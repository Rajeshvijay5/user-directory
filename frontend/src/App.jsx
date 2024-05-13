import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userspage from "./pages/Userspage";
import Userid from "./pages/Userid";
import Usertable from "./pages/Usertable";

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Userspage />} />
          <Route path="/:id" element={<Userid />} />
          <Route path="/usertable" element={<Usertable/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
