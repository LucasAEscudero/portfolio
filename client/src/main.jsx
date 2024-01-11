import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

// redux
import store from "./redux/store.js";
import { Provider } from "react-redux";

import "./index.css";

// axios.defaults.baseURL = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById("root")).render(
  // <Provider store={store}>
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  // </Provider>
);
