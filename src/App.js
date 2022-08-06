import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./Footer";
import Login from "./Pages/Login";
import EvidenceForm from "./Pages/EvidenceForm";
import AboutUs from "./Pages/AboutUs";
import Loans from "./Pages/Loans";
import Water from "./Pages/Water";
import Provider from "./Pages/Provider";
import Deposits from "./Pages/Deposits";
import Tax from "./Pages/Tax";
import Fees from "./Pages/Fees";
import Contact from "./Pages/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<EvidenceForm />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/businessrates" element={<Loans />} />
          <Route path="/thameswater" element={<Water />} />
          <Route path="/energyprovider" element={<Provider />} />
          <Route path="/tenantdeposits" element={<Deposits />} />
          <Route path="/counciltax" element={<Tax />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </div>
  );
}
export default App;
