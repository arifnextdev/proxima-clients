import { Routes, Route } from "react-router-dom";
import Footer from "./componets/Footer";
import Navber from "./componets/Navber";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="app bg-slate-900 text-slate-100 min-h-screen">
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
