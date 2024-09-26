import "./App.css";
import CompanyPage from "./components/comapanypage/CompanyPage";
import Profile from "./components/profilepage/Profile";
import SignUp from "./components/signup/SignUp";
import HomePage from "./Page/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signIn" element ={<SignUp />} />
        <Route path="/companyPage" element={<CompanyPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
