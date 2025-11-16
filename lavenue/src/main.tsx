
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Noise from "./components/Noise";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Noise
      patternSize={250}
      patternScaleX={1}
      patternScaleY={1}
      patternRefreshInterval={2}
      patternAlpha={10}
    />
  </StrictMode>
);
