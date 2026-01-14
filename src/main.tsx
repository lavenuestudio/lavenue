import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Noise from "./components/Noise";
import lavenueLogo from "./assets/lavenue.svg";
import { Link } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter basename={import.meta.env.BASE_URL}>
      <div className="app-title">
        <span >
           <Link to="/">
            <img
              src={lavenueLogo}
              className="logo lavenue"
              alt="L'Avenue logo"
            />
            </Link>
        </span>
      </div>
      <App />
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={10}
      />
    </HashRouter>
  </StrictMode>
);
