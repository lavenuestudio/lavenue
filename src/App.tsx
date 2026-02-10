import { Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShadowBan from "./pages/ShadowBan";
import RunDrop from "./pages/RunDrop";
import { pantalonShadowBan, pantalonShadowBan2 } from "./data/db"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shadowBanDrop" element={<ShadowBan shadowBanDataPants={pantalonShadowBan} shadowBanDataPants2={pantalonShadowBan2}  />} />
        <Route path="/runDrop" element={<RunDrop shadowBanDataPants={pantalonShadowBan} />} />
      </Routes>
    </>
  );
}

export default App;
