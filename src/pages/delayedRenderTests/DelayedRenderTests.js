import DelayedRender from "../../components/delayedRender/DelayedRender";

function DelayedRenderTests() {
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
    <div className="page delayed-render-tests">
      <h1>React Animation Tests</h1>
      <p>(Refresh page to see animation)</p>
      <section className="card-container">
        {n.map((item, i) => (
          <DelayedRender
            key={i}
            transition={15}
            index={i + 1}
            customClass="flex-card"
          >
            <div className="card">{item}</div>
          </DelayedRender>
        ))}
      </section>
    </div>
  );
}

export default DelayedRenderTests;
