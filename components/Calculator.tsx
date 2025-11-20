"use client";

import { useState } from "react";

const Calculator = () => {
    const [result, setResult] = useState(0);
  const [display, setDisplay] = useState("");
  const [isOperated, setIsOperated] = useState(false)

  const addText = (x: String) => {
    if ((x == '+' || x == '-' || x == 'x' || x == '/') && !isOperated) {
        setDisplay(display + x);
        setIsOperated(true);
    }
    else if ((x == '+' || x == '-' || x == 'x' || x == '/') && isOperated) {
        setDisplay(display)
    }
    else {
        setDisplay(display + x);
        setIsOperated(false);
    }
  };

  const clear = () => {
    setDisplay("");
    setIsOperated(false);
  }

  const submit = () => {

  };

  return (
    <div className="grid grid-cols-4 mx-100 bg-base-300 p-5 rounded-2xl gap-1 shadow-xl/30">
      <div className="col-span-4 flex justify-end items-center bg-base-100 h-20 p-5 mb-2 rounded-md inset-shadow-sm">
        <h1 className="text-2xl">{display}
        </h1>
      </div>
      <button className="btn btn-primary h-20 text-2xl" onClick={() => addText('1')}>1</button>
      <button className="btn btn-primary h-20 text-2xl" onClick={() => addText('2')}>2</button>
      <button className="btn btn-primary h-20 text-2xl" onClick={() => addText('3')}>3</button>
      <button className="btn btn-primary h-20 text-2xl" onClick={() => addText('+')}>+</button>
      <button className="btn btn-primary h-20 text-2xl" onClick={() => addText('4')}>4</button>
      <button className="btn btn-primary h-20 text-2xl" onClick={() => addText('5')}>5</button>
      <button className="btn btn-primary h-20 text-2xl" onClick={() => addText('6')}>6</button>
      <button className="btn btn-primary h-20 text-2xl" onClick={() => addText('-')}>-</button>
      <button className="btn btn-primary h-20 text-2xl" onClick={() => addText('7')}>7</button>
      <button className="btn btn-primary h-20 text-2xl" onClick={() => addText('8')}>8</button>
      <button className="btn btn-primary h-20 text-2xl" onClick={() => addText('9')}>9</button>
      <button className="btn btn-primary h-20 text-xl" onClick={() => addText('x')}>X</button>
      <button className="btn btn-primary h-20 text-xl" onClick={() => clear()}>CLR</button>
      <button className="btn btn-primary h-20 text-2xl" onClick={() => addText('0')}>0</button>
      <button className="btn btn-primary h-20 text-xl" onClick={() => submit()}>ENTER</button>
      <button className="btn btn-primary h-20 text-2xl" onClick={() => addText('/')}>/</button>
    </div>
  );
};
export default Calculator;
