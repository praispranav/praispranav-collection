import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import ProfilePage from "../pages/profile";
import Blog from "../pages/blog";

function Navigator() {
  return (
     <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/profile" element={<ProfilePage />} />
         <Route path="/blog" element={<Blog />} />
     </Routes>
  );
}

export default Navigator;