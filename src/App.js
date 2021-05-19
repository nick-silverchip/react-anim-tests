import "./_styles/main.scss";
import DelayedRender from "./components/delayedRender/DelayedRender";
import DelayedRenderTests from "./pages/delayedRenderTests/DelayedRenderTests";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <DelayedRenderTests />
    </div>
  );
}

export default App;
