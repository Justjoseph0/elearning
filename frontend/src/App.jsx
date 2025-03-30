import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./components/AppLayout";
import Courses from "./pages/Courses";
import AboutUs from "./pages/AboutUs";
import Faq from "./pages/Faq";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faq" element={<Faq />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
