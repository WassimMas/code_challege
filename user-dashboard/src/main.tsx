import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import UserDashboard from "./components/UserDashboard.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserDashboard />
  </React.StrictMode>
);
