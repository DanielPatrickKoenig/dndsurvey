import TopNav from './components/TopNav';
import Homepage from './components/Homepage';
import OverlayModal from './components/OverlayModal';

import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="main-content-container">
        <TopNav />
        <Homepage />
      </div>
      <OverlayModal />
    </div>
  );
}

export default App;
