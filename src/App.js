import { LeftNavBar } from "./components/LeftNavBar.jsx";
import "./App.css";
import {RightBodyMenu} from './components/RightBodyMenu.jsx'


function App() {
  return (
    <>
    <div className="App">
        <LeftNavBar />
        <RightBodyMenu />
    </div>
    </>
  );
}

export default App;
