import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Forum from "./pages/Forum/Forum";
import ConnectCommunity from "./pages/ConnectCommunity/ConnectCommunity";
import Final from "./pages/Final/Final";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/connect" Component={ConnectCommunity} />
        <Route path="/forum" Component={Forum} />
        <Route path="/end" Component={Final} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
