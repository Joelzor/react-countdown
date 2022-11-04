import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  let [fontSize, setFontSize] = useState(2);
  const [isDecreaseActive, setIsDecreaseActive] = useState(false);
  const [isIncreaseActive, setIsIncreaseActive] = useState(false);

  function decreaseCount() {
    if (count < 1) {
      return;
    }
    if (count < 2) {
      setIsDecreaseActive(true);
    }
    setIsIncreaseActive(false);
    setCount(--count);
    setFontSize(fontSize - 0.2);
  }

  function increaseCount() {
    if (count > 9) {
      return;
    }
    if (count > 8) {
      setIsIncreaseActive(true);
    }
    setIsDecreaseActive(false);
    setCount(++count);
    setFontSize(fontSize + 0.2);
  }

  function halveCount() {
    setCount(Math.floor(count / 2));
  }

  function doubleCount() {
    setCount(count * 2);
  }

  return (
    <>
      <h1>Counter App</h1>
      <p style={{ fontSize: fontSize + "rem" }}>{count}</p>
      <button
        onClick={decreaseCount}
        className={isDecreaseActive ? "move-down" : ""}
      >
        Decrement
      </button>
      <button
        onClick={increaseCount}
        className={isIncreaseActive ? "move-down" : ""}
      >
        Increment
      </button>
      <button onClick={halveCount}>Halve</button>
      <button onClick={doubleCount}>Double</button>
    </>
  );
}

export default App;
