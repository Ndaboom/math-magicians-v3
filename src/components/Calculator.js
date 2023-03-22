import React, { useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

function Calculator(props) {
  const [state, setState] = useState({
    total: 0,
    next: 0,
    operation: '',
  });

  const clickHandler = (e) => {
    setState(calculate(state, e.target.textContent));
  };

  const { next, total } = state;
  const { name } = props;

  return (
    <div className="calculator">
      <h1>{ name }</h1>
      <div className="screen-container">{next || total || 0}</div>
      <div className="touch-pad">
        <button onClick={clickHandler} type="button">AC</button>
        <button onClick={clickHandler} type="button">+/-</button>
        <button onClick={clickHandler} type="button">%</button>
        <button onClick={clickHandler} className="orange" type="button">÷</button>

        <button onClick={clickHandler} type="button">7</button>
        <button onClick={clickHandler} type="button">8</button>
        <button onClick={clickHandler} type="button">9</button>
        <button onClick={clickHandler} className="orange" type="button">x</button>

        <button onClick={clickHandler} type="button">4</button>
        <button onClick={clickHandler} type="button">5</button>
        <button onClick={clickHandler} type="button">6</button>
        <button onClick={clickHandler} className="orange" type="button">-</button>

        <button onClick={clickHandler} type="button">1</button>
        <button onClick={clickHandler} type="button">2</button>
        <button onClick={clickHandler} type="button">3</button>
        <button onClick={clickHandler} className="orange" type="button">+</button>
      </div>
      <div className="sub-touch-pad">
        <button className="gray-color zero-btn" type="button">0</button>
        <button className="gray-color dot-btn" type="button">.</button>
        <button className="orange equal-btn" type="button">=</button>
      </div>
    </div>
  );
}

Calculator.propTypes = {
  name: PropTypes.string,
};

Calculator.defaultProps = {
  name: 'Calculator 1.0',
};

export default Calculator;
