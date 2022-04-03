import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import ProfilePage from "../pages/profile";
import Blog from "../pages/blog";
import AboutScreen from "../pages/about";

function Navigator() {
  return (
     <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/profile" element={<ProfilePage />} />
         <Route path="/blog" element={<Blog />} />
         <Route path="/about" element={<AboutScreen />} />
     </Routes>
  );
}

export default Navigator;