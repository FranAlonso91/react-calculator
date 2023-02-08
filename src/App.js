import "./styles.css";
import { useState } from "react";
import casioImage from "./casioImage.png";

function App() {
  const [result, setResult] = useState("");

  //Handle click
  const handleClick = (e) => {
    setResult(result?.concat(e.target?.name));
  };
  //Clear button
  const clear = () => {
    setResult("");
  };
  //Backspace
  const backspace = () => {
    setResult(result?.slice(0, -1));
  };
  // Calculate
  const calculate = () => {
    try {
      setResult(Number(eval(result).toString()).toFixed(2));
    } catch (error) {
      setResult("invalid format");
    }
  };

  return (
    <>
      <div className="container">
        <img src={casioImage} alt="CASIO" />
        <div className="calculator">
          <input type="text" className="calc-numbers" value={result} />
          <div className="calculator-buttons">
            <button onClick={clear} className="btn clear span-2">
              c
            </button>
            <button onClick={backspace} className="btn orange">
              &larr;
            </button>
            <button onClick={handleClick} name="/" className="btn orange">
              &divide;
            </button>
            <button onClick={handleClick} name="7" className="btn">
              7
            </button>
            <button onClick={handleClick} name="8" className="btn">
              8
            </button>
            <button onClick={handleClick} name="9" className="btn">
              9
            </button>
            <button onClick={handleClick} name="*" className="btn orange">
              x
            </button>
            <button onClick={handleClick} name="4" className="btn">
              4
            </button>
            <button onClick={handleClick} name="5" className="btn">
              5
            </button>
            <button onClick={handleClick} name="6" className="btn">
              6
            </button>
            <button onClick={handleClick} name="-" className="btn orange">
              -
            </button>
            <button onClick={handleClick} name="1" className="btn">
              1
            </button>
            <button onClick={handleClick} name="2" className="btn">
              2
            </button>
            <button onClick={handleClick} name="3" className="btn">
              3
            </button>
            <button onClick={handleClick} name="+" className="btn orange">
              +
            </button>
            <button onClick={handleClick} name="0" className="btn span-3">
              0
            </button>
            <button onClick={calculate} className="btn orange equal">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
