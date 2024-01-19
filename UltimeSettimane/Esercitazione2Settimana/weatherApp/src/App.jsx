import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/CustomHome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home page="Home" />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
