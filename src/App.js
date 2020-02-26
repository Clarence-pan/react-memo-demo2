import React, {
  memo,
  useState,
  useRef,
  createContext,
  useContext
} from "react";
import "./styles.css";

const ColorContext = createContext("#000");

const Label = ({ count }) => {
  const color = useContext(ColorContext);
  const ref = useRef(0);
  ref.current++;

  return (
    <div style={{ color }}>
      Count: {count} (rendered {ref.current} times)
    </div>
  );
};

const Label2 = memo(({ count }) => {
  const color = useContext(ColorContext);
  const ref = useRef(0);
  ref.current++;

  return (
    <div style={{ color }}>
      Count: {count} (rendered {ref.current} times)
    </div>
  );
});

export default function App() {
  const [color, setColor] = useState("#000");
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div className="App">
      <div>
        <div>
          ColorContext:
          <input
            type="text"
            value={color}
            onInput={e => {
              setColor(e.target.value);
            }}
          />
        </div>
      </div>
      <hr />
      <ColorContext.Provider value={color}>
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
      </ColorContext.Provider>

      <hr />
      <p>Note: memo FC will still rerender if context value changes.</p>
      <p>This is a little different from the old context API which has bugs.</p>
    </div>
  );
}
