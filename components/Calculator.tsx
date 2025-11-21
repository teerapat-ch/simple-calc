"use client";

import { useState } from "react";

const Calculator = () => {
  const [numA, setNumA] = useState(0);
  const [historyDisplay, setHistoryDisplay] = useState("");
  const [display, setDisplay] = useState("");
  const [isOperated, setIsOperated] = useState(false)
  const [canEdit, setCanEdit] = useState(false);

  const isOperator = (x: String) => {
    return x == '+' || x == '-' || x == 'x' || x == '/';
  }

  const AddText = (x: String) => {
    if (canEdit && !isOperator(x)) {
        Clear();
        setCanEdit(false);
        setDisplay("" + x);
        return;
    }
    if (isOperator(x) && !isOperated) {
        setIsOperated(true);
        setCanEdit(false);
        if (display != "") {
            Operate(x);
        }
        else if (x == '-') {
            setDisplay(display + x);
        }
    }
    else if (isOperator(x) && isOperated) {
        setDisplay(display)
    }
    else {
        setDisplay(display + x);
        setIsOperated(false);
    }
  };

  const Clear = () => {
    setNumA(0)
    setHistoryDisplay("")
    setDisplay("");
    setIsOperated(false);
  };

  const Calculate = (x: String) => {
    const a = Number(numA);
    const b = Number(display);
    let c = 0;
    switch (x) {
        case '+':
            c = a + b;
            break;
        case '-':
            c = a - b;
            break;
        case 'x':
            c = a * b;
            break;
        case '/':
            c = a / b;
            break;
    }
    return c;
  }

  const Operate = (x: String) => {
    let res = numA;
    if (numA != 0) {
      res = Calculate(historyDisplay.substring(historyDisplay.length-1));
    }
    else {
        res = Number(display);
    }
    setNumA(0);
    setNumA(res)
    setHistoryDisplay(String(res) + x);
    setDisplay("")
  };

  const Submit = () => {
    const res = Calculate(historyDisplay.substring(historyDisplay.length-1));
    setNumA(0);
    setHistoryDisplay("");
    setDisplay(String(res));
    setCanEdit(true);
  };

  return (
    <div className="grid grid-cols-4 mx-100 bg-base-300 p-5 rounded-2xl gap-1 shadow-xl/30">
      <div className="col-span-4 flex justify-center items-end flex-col bg-base-100 h-20 p-5 mb-2 rounded-md inset-shadow-sm">
        <h1 className="text-md">{historyDisplay}</h1>
        <h1 className="text-3xl">{display}</h1>
      </div>
      <button className="btn btn-primary h-20 text-2xl" onClick={() => AddText('1')}>1</button>
      <button className="btn btn-primary h-20 text-2xl" onClick={() => AddText('2')}>2</button>
      <button className="btn btn-primary h-20 text-2xl" onClick={() => AddText('3')}>3</button>
      <button className="btn btn-primary h-20 text-2xl" onClick={() => AddText('+')}>+</button>
      <button className="btn btn-primary h-20 text-2xl" onClick={() => AddText('4')}>4</button>
      <button className="btn btn-primary h-20 text-2xl" onClick={() => AddText('5')}>5</button>
      <button className="btn btn-primary h-20 text-2xl" onClick={() => AddText('6')}>6</button>
      <button className="btn btn-primary h-20 text-2xl" onClick={() => AddText('-')}>-</button>
      <button className="btn btn-primary h-20 text-2xl" onClick={() => AddText('7')}>7</button>
      <button className="btn btn-primary h-20 text-2xl" onClick={() => AddText('8')}>8</button>
      <button className="btn btn-primary h-20 text-2xl" onClick={() => AddText('9')}>9</button>
      <button className="btn btn-primary h-20 text-xl" onClick={() => AddText('x')}>X</button>
      <button className="btn btn-primary h-20 text-xl" onClick={() => Clear()}>CLR</button>
      <button className="btn btn-primary h-20 text-2xl" onClick={() => AddText('0')}>0</button>
      <button className="btn btn-primary h-20 text-xl" onClick={() => Submit()}>ENTER</button>
      <button className="btn btn-primary h-20 text-2xl" onClick={() => AddText('/')}>/</button>
    </div>
  );
};
export default Calculator;
