import { useReducer, useRef, useState } from "react";

function reducer(state, action) {
  console.log(state, action);
  /*
  explain : reducer will remember the previous state. 
  it will defind the next state of the varuable count in the action.payload
  */
  if (action.type === "inc") return state + 1;
  if (action.type === "dec") return state - 1;
  if (action.type === "setCount") return action.payload;
  // return state + action;
}

function DateCounter() {
  // const [step, setStep] = useState(1);
  // const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(reducer, 0);

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + count);

  const defineStep = (e) => {
    setStep(Number(e.target.value));
  };

  const defineCount = (e) => {
    // setCount(Number(e.target.value));
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const reset = () => {
    // setCount(0);
    setStep(1);
  };

  const dec = (e) => {
    // setCount(count - step);
    // dispatch({ type: "dec", payload: -1 });
    dispatch({ type: "dec" });
  };
  const inc = (e) => {
    // setCount(count + step);
    // dispatch({ type: "inc", payload: 1 });
    dispatch({ type: "inc" });
  };

  // test useRef hook

  const inputRef = useRef("");
  const handleClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <div>
        <input
          type="range"
          min={0}
          max={10}
          step={1}
          value={step}
          onChange={defineStep}
        />
        <span style={{ fontSize: "2rem" }}> {step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>
      <h2>{currentDate.toDateString()}</h2>
      <div>
        <button onClick={reset}>Reset</button>
      </div>

      <div style={{ display: "none" }}>
        <p>test learning input ref</p>
        <input ref={inputRef} />
        <button onClick={handleClick}>Focus the input</button>
      </div>
    </div>
  );
}

export default DateCounter;
