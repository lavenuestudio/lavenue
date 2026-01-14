import { Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShadowBan from "./pages/ShadowBan";
import RunDrop from "./pages/RunDrop";
import { dbShadowBan } from "./data/db"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shadowBanDrop" element={<ShadowBan shadowBanDataPants={dbShadowBan}/>} />
        <Route path="/runDrop" element={<RunDrop shadowBanDataPants={dbShadowBan} />} />
      </Routes>
    </>
  );
}

export default App;
