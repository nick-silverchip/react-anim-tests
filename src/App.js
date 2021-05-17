import "./App.css";
import DelayedFlexBox from "./DelayedFlexBox";

const placeholder = <div className="card placeholder" />;

function App() {
  const n = [
    "Card 1",
    "Card 2",
    "Card 3",
    "Card 4",
    "Card 5",
    "Card 6",
    "Card 7",
    "Card 8",
    "Card 9",
    "Card 10",
  ];
  return (
    <div className="App">
      <h1>React Animation Tests</h1>
      <p>(Refresh page to see animation)</p>
      <section className="card-container">
        {n.map((item, i) => (
          <DelayedFlexBox key={i} placeholder={placeholder} delay={i * 15}>
            <div className="card">{item}</div>
          </DelayedFlexBox>
        ))}
      </section>
    </div>
  );
}

export default App;
