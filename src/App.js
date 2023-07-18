import "./App.css";
import { LeftNavBar } from "./components/LeftNavMenu/LeftNavBar";
import { RightBodyMenu } from "./components/RightBodyMenu.jsx";

function App() {
  return (
    <>
      <div className="App">
        <section className="Wrapper">
          <LeftNavBar />
          <RightBodyMenu />
        </section>
      </div>
    </>
  );
}

export default App;
