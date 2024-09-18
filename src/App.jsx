import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomeS } from "./pages/Home/HomeS";
import { CatsAlbumS } from "./pages/CatsAlbum/CatsAlbumS";
import Layout from "./components/Layout/Layout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeS />} />
            <Route path="/Cats" element={<CatsAlbumS />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
