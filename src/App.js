import "./App.css";
import { useState } from "react";
import Survey from "./components/Survey";
import Modal from "./components/Modal";

function App() {
  const [showSurvey, setShowSurvey] = useState(false);
  return (
    <div className="App">
      <div className="banner"></div>

      {!showSurvey && <Modal setShowSurvey={setShowSurvey} />}
      {showSurvey && (
        <Survey showSurvey={showSurvey} setShowSurvey={setShowSurvey} />
      )}
    </div>
  );
}

export default App;
