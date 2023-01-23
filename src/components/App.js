import React, { useState } from "react";
import AddInfo from "./AddInfo";
import "./App.css";
import Header from "./Header";

function App() {
  const [info, setInfo] = useState([]);

  const addInfoHandler = (data) => {
    console.log(data);
    setInfo([...info]);
  };
  return (
    <div>
      <Header />
      <AddInfo addInfoHandler={addInfoHandler} />
    </div>
  );
}

export default App;
