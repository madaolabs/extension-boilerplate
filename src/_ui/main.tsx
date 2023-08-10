import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Router } from "src/_ui/routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <Router />
  </HashRouter>
);
