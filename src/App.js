import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";




function App() {
  const [mode, setMode] = useState("light");
const[alert, setAlert]=useState("null");


const showAlert = (message, type) => {
  setAlert({
    msg: message,
    Type: type,
  });
};


  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1B5378";
       showAlert("Dark mode has been enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
       showAlert("Light mode has been enable", "success");
    }
  };
  return (
    <>
      <Navbar
        tittle="NDE Technology"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
    <Alert alert={alert}/>
      <div className="container">
        <TextForm heading="Analytic Words" showAlert={showAlert}mode={mode} />

        <About />
      </div>
    </>
  );
}

export default App;
