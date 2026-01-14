import { Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShadowBan from "./pages/ShadowBan";
import RunDrop from "./pages/RunDrop";
import { dbShadowBan } from "./data/db"
import { dbShadowBanJersey } from "./data/db"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shadowBanDrop" element={<ShadowBan shadowBanDataPants={dbShadowBan} shadowBanDataJersey={dbShadowBanJersey} /> } />
        <Route path="/runDrop" element={<RunDrop shadowBanDataPants={dbShadowBan} shadowBanDataJersey={dbShadowBanJersey} /> } />
      </Routes>
    </>
  );
}

export default App;
