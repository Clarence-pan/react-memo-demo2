import React, { memo, useState, useRef } from "react";
import "./styles.css";

const Label = ({ count }) => {
  const ref = useRef(0);
  ref.current++;

  return (
    <div>
      Count: {count} (rendered {ref.current} times)
    </div>
  );
};

const Label2 = memo(({ count }) => {
  const ref = useRef(0);
  ref.current++;

  return (
    <div>
      Count: {count} (rendered {ref.current} times)
    </div>
  );
});

export default function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div className="App">
      <input
        type="number"
        value={`${count}`}
        onInput={e => {
          setCount(+e.target.value || 0);
        }}
      />
      <button onClick={() => setCount(n => n + 1)}>Add</button>
      <button onClick={() => setCount(n => n - 1)}>Sub</button>
      <button onClick={() => setCount(n => n)}>Just Set</button>

      <Label count={count} />

      <input
        type="number"
        value={`${count2}`}
        onInput={e => {
          setCount2(+e.target.value || 0);
        }}
      />
      <button onClick={() => setCount2(n => n + 1)}>Add</button>
      <button onClick={() => setCount2(n => n - 1)}>Sub</button>
      <button onClick={() => setCount2(n => n)}>Just Set</button>
      <Label2 count={count2} />
    </div>
  );
}
