import "./App.css";
import { useState } from "react";
import Survey from "./components/Survey";
import Modal from "./components/Modal";

function App() {
  const [showSurvey, setShowSurvey] = useState(false);
  return (
    <div className="App">
      <div className></div>
      <h2>My Account</h2>
      {!showSurvey && <Modal setShowSurvey={setShowSurvey} />}
      {showSurvey && <Survey />}
    </div>
  );
}

export default App;
