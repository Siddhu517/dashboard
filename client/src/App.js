import "./App.css";
import Index from "./components/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/dashboard" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
