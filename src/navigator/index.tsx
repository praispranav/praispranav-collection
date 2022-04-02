import { Route, Routes } from "react-router-dom";
import ThemeUpload from "../pages/admin/uploadtheme";
import HomePage from "../pages/home";
import Illustration from "../pages/illustration";
import ProfilePage from "../pages/profile";
import Blog from "../pages/blog";
import UploadIllustrator from "../pages/admin/uploadIllustration";

function Navigator() {
  return (
     <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/profile" element={<ProfilePage />} />
         <Route path="/blog" element={<Blog />} />
         <Route path="/admin/upload-theme" element={<ThemeUpload />} />
         <Route path="/admin/upload-illustrator" element={<UploadIllustrator />} />
         <Route path="/illustration" element={<Illustration />} />
     </Routes>
  );
}

export default Navigator;