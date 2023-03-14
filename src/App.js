import { Route, Routes } from "react-router-dom";
import Beaches from "./pages/beaches/Beaches";
import Birds from "./pages/birds/Birds";
import Foods from "./pages/foods/Foods";
import HomePage from "./pages/Homepage/HomePage";
import Mountains from "./pages/mountains/Mountains";
import SearchImg from "./pages/searchImg/SearchImg";

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/mountains" element={<Mountains></Mountains>} />
        <Route path="/beaches" element={<Beaches></Beaches>} />
        <Route path="/birds" element={<Birds></Birds>} />
        <Route path="/foods" element={<Foods></Foods>} />
        <Route path="/search/:searchImg" element={<SearchImg></SearchImg>} />
      </Routes>
  );
}

export default App;
