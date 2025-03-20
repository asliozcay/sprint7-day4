import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Success from "./components/Success";
function App() {
  const [isSuccess, setIsSuccess] = useState(false);
  return <>{!isSuccess ? <Login setIsSuccess={setIsSuccess} /> : <Success />}</>;
}

export default App;
