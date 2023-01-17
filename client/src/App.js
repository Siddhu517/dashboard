import "./App.css";
import Index from "./components/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import axios from "axios";

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_PUBLIC_API;
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
