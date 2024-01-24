import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./store/Store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <>
      <div className="App">
        <Provider store={Store}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </Provider>
      </div>
    </>
  );
};

export default App;
