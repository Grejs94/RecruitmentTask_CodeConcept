import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MainPage } from "pages";

import "./styles.js";
toast.configure();

function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
