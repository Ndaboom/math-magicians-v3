import React from 'react';

function Calculator() {
  return (
    <div className="calculator">
      <h1>Math magicians</h1>
      <div className="screen-container">0</div>
      <div className="touch-pad">
        <button className="gray-color" type="button">AC</button>
        <button className="gray-color" type="button">+/-</button>
        <button className="gray-color" type="button">%</button>
        <button className="orange" type="button">÷</button>

        <button className="gray-color" type="button">7</button>
        <button className="gray-color" type="button">8</button>
        <button className="gray-color" type="button">9</button>
        <button className="orange" type="button">x</button>

        <button className="gray-color" type="button">4</button>
        <button className="gray-color" type="button">5</button>
        <button className="gray-color" type="button">6</button>
        <button className="orange" type="button">-</button>

        <button className="gray-color" type="button">1</button>
        <button className="gray-color" type="button">2</button>
        <button className="gray-color" type="button">3</button>
        <button className="orange" type="button">+</button>
      </div>
      <div className="sub-touch-pad">
        <button className="gray-color zero-btn" type="button">0</button>
        <button className="gray-color dot-btn" type="button">.</button>
        <button className="orange equal-btn" type="button">=</button>
      </div>
    </div>
  );
}

export default Calculator;
