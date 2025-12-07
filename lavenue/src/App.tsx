import { Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShadowBan from "./pages/ShadowBan";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shadowBanDrop" element={<ShadowBan />} />
      </Routes>
    </>
  );
}

export default App;
