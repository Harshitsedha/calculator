import "./Display.css";
import "./Arithmetic.css";
import { useState } from "react";
export default function Display() {
  const [value1, setValue1] = useState("12");

  function handleClear() {
    setValue1((e) => "");
  }

  function handleArithmetic(val) {
    setValue1((e) => e + String(val));
  }

  function handleResult() {
    setValue1((e) => eval(e));
  }

  return (
    <>
      <div id="assemblyBox">
        <div id="displaybox">{value1}</div>
      </div>
      <Arithmetic
        onClearClick={handleClear}
        onArithmeticClick={handleArithmetic}
        onResult={handleResult}
      />
    </>
  );
}

function Arithmetic({ onClearClick, onArithmeticClick, onResult }) {
  return (
    <div id="ArithmeticBox">
      <ButtonClear onClearClick={onClearClick}>C </ButtonClear>
      <Buttonsss>()</Buttonsss>
      <Buttonss val="%" onArithmeticClick={onArithmeticClick}>
        %{" "}
      </Buttonss>
      <Buttonss val="/" onArithmeticClick={onArithmeticClick}>
        /{" "}
      </Buttonss>
      <Buttonss val="7" onArithmeticClick={onArithmeticClick}>
        7{" "}
      </Buttonss>
      <Buttonss val="8" onArithmeticClick={onArithmeticClick}>
        8{" "}
      </Buttonss>
      <Buttonss val="9" onArithmeticClick={onArithmeticClick}>
        9{" "}
      </Buttonss>
      <Buttonss val="*" onArithmeticClick={onArithmeticClick}>
        X{" "}
      </Buttonss>
      <Buttonss val="4" onArithmeticClick={onArithmeticClick}>
        4{" "}
      </Buttonss>
      <Buttonss val="5" onArithmeticClick={onArithmeticClick}>
        5{" "}
      </Buttonss>
      <Buttonss val="6" onArithmeticClick={onArithmeticClick}>
        6{" "}
      </Buttonss>
      <Buttonss val="-" onArithmeticClick={onArithmeticClick}>
        -{" "}
      </Buttonss>
      <Buttonss val="1" onArithmeticClick={onArithmeticClick}>
        1{" "}
      </Buttonss>
      <Buttonss val="2" onArithmeticClick={onArithmeticClick}>
        2{" "}
      </Buttonss>
      <Buttonss val="3" onArithmeticClick={onArithmeticClick}>
        3{" "}
      </Buttonss>
      <Buttonss val="+" onArithmeticClick={onArithmeticClick}>
        +{" "}
      </Buttonss>
      <Buttonsss>+/-</Buttonsss>
      <Buttonss val="0" onArithmeticClick={onArithmeticClick}>
        0
      </Buttonss>
      <Buttonss val=".">. </Buttonss>
      <ButtonResult onResult={onResult}>= </ButtonResult>
    </div>
  );
}

function NumDigits() {
  return (
    <div id="digitbox">
      <p>digits...</p>
    </div>
  );
}

function Buttonss({ val, onArithmeticClick, children }) {
  return (
    <div>
      <button
        id="buttons"
        type="text"
        value={val}
        onClick={() => onArithmeticClick(val)}
      >
        {children}
      </button>
    </div>
  );
}

function Buttonsss({ val, children }) {
  return (
    <div>
      <button id="buttons" type="text" value={val}>
        {children}
      </button>
    </div>
  );
}

function ButtonClear({ val, onClearClick, children }) {
  return (
    <div>
      <button
        id="buttons"
        type="text"
        value={val}
        onClick={() => onClearClick()}
      >
        {children}
      </button>
    </div>
  );
}

function ButtonResult({ onResult, children }) {
  return (
    <div>
      <button id="buttons" type="text" onClick={() => onResult()}>
        {children}
      </button>
    </div>
  );
}
