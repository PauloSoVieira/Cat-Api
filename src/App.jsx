import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomeS } from "./pages/Home/HomeS";
import { CatsAlbumS } from "./pages/CatsAlbum/CatsAlbumS";
import Layout from "./components/Layout/Layout";
import { LoginS } from "./pages/Login/LoginS";
import { LikedCatsS } from "./pages/LikedCats/LikedCatsS.jsx";
import { UserProvider } from "./pages/User/User";
function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomeS />} />
              <Route path="/Cats" element={<CatsAlbumS />} />
              <Route path="Login" element={<LoginS />} />
              <Route path="/LikedCats" element={<LikedCatsS />} />
            </Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
