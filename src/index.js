import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} defaultRating={3} />
    <StarRating
      maxRating={5}
      color="red"
      size={24}
      className="test"
      messages={["Terrible", "Bad", "Okay", "Good", "Amzaing"]}
    />

    <Test /> */}
  </React.StrictMode>
);
