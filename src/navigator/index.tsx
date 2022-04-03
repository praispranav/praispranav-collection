import { Route, Routes } from "react-router-dom";
import ThemeUpload from "../pages/admin/uploadtheme";
import HomePage from "../pages/home";
import Illustration from "../pages/illustration";
import ProfilePage from "../pages/profile";
import Blog from "../pages/blog";
import AboutScreen from "../pages/about";
import UploadIllustrator from "../pages/admin/uploadIllustration";
import ManageBlog from "../pages/admin/manageBlog";

function Navigator() {
  return (
     <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/profile" element={<ProfilePage />} />
         <Route path="/blog" element={<Blog />} />
         <Route path="/about" element={<AboutScreen />} />
         <Route path="/admin/upload-theme" element={<ThemeUpload />} />
         <Route path="/admin/upload-illustrator" element={<UploadIllustrator />} />
         <Route path="/illustration" element={<Illustration />} />
         <Route path="/admin/manage-blog" element={<ManageBlog />} />
     </Routes>
  );
}

export default Navigator;