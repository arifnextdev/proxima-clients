import { Routes, Route } from "react-router-dom";
import Footer from "./componets/Footer";
import Navber from "./componets/Navber";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <div className="app bg-slate-900 text-slate-100 min-h-screen">
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
