import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import ProfilePage from "../pages/profile";

function Navigator() {
  return (
     <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/profile" element={<ProfilePage />} />
     </Routes>
  );
}

export default Navigator;