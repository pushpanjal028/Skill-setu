import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import SkillAnalysis from "./pages/SkillAnalysis";
import VerifyEmail from "./pages/verifyEmail";
import Verify from "./pages/verify";



function App() {
  return (
    <Routes>

      <Route path="/" element={<Landing />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="/skill-analysis" element={<SkillAnalysis />} />

      <Route path="/verify-email" element={<VerifyEmail />} />
       
      <Route path="/verify/:token" element={<Verify />} />

       
    </Routes>
  );
}

export default App;


