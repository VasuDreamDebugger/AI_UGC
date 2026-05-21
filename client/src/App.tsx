import Navbar from "./components/Navbar";
import SoftBackdrop from "./components/SoftBackdrop";
import Footer from "./components/Footer";
import LenisScroll from "./components/lenis";
import Results from "./pages/Results";
import Community from "./pages/Community";
import MyGenerations from "./pages/MyGenerations";
import Plans from "./pages/Plans";
import Generator from "./pages/Generator";
import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <SoftBackdrop />
      <LenisScroll />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/my-generations" element={<MyGenerations />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/results/:id" element={<Results />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
