import "./App.css";


import { LeftNavBar } from "./components/LeftNavMenu/LeftNavBar";
import { RightBodyMenu } from "./components/RightBodyMenu.jsx";

function App({setTheme,theme}) {
  
  return (
    <>
     
        <div className="App">
          <section className="Wrapper">
            <LeftNavBar {...{setTheme,theme}}/>
            
            <RightBodyMenu />
          </section>
        </div>
    
    </>
  );
}

export default App;

