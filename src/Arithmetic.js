import "./Arithmetic.css";

export default function Arithmetic() {
  return (
    <div id="ArithmeticBox">
      <Buttons>C </Buttons>
      <Buttons>()</Buttons>
      <Buttons>% </Buttons>
      <Buttons>/ </Buttons>
      <Buttons>7 </Buttons>
      <Buttons>8 </Buttons>
      <Buttons>9 </Buttons>
      <Buttons>X </Buttons>
      <Buttons>4 </Buttons>
      <Buttons>5 </Buttons>
      <Buttons>6 </Buttons>
      <Buttons>- </Buttons>
      <Buttons>1 </Buttons>
      <Buttons>2 </Buttons>
      <Buttons>3 </Buttons>
      <Buttons>+ </Buttons>
      <Buttons>+/-</Buttons>
      <Buttons>0 </Buttons>
      <Buttons>. </Buttons>
      <Buttons>= </Buttons>
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

function Buttons({ children }) {
  return (
    <div id="buttons">
      <h1>{children}</h1>
    </div>
  );
}
