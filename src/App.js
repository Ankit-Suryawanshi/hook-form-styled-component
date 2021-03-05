import { useState } from "react";
import "./App.css";
import Routers from "./routes";
import ProfileContext from "./MyContext";

function App() {
  const data = useState({});
  return (
    <ProfileContext.Provider value={data}>
      <Routers />
    </ProfileContext.Provider>
  );
}

export default App;
