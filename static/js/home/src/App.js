import React, { useState } from 'react';

import TopNav from './components/TopNav';
import Homepage from './components/Homepage';
import OverlayModal from './components/OverlayModal';
import Button from './components/Button';

import './App.scss';
import SurveyQuestions from './components/SurveyQuestions';

function App() {

  const [appMode, setAppMode] = useState('home');
  const [showInstructions, setShowInstructions] = useState(false);

  const AppModeHandler = (value) => {
    setAppMode(value);
    if (value === 'survey') {
      setShowInstructions(true);
    }
  }

  const showInstructionsHandler = (value) => {
    setShowInstructions(value);
  }
  

  return (
    <div className="App">
      <div className="main-content_container">
        <TopNav showInstructions={showInstructionsHandler}/>
        {appMode==='home' ? <Homepage surveyStarted={AppModeHandler}/> : ''}
        {appMode === 'survey' ? <SurveyQuestions /> : ''}
        {showInstructions ? <OverlayModal showInstructions={showInstructionsHandler} /> : ''}
      </div>
    </div>
  );
}

export default App;
