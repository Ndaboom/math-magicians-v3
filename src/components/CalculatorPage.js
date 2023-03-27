import React from 'react';
import Calculator from './Calculator';
import styles from './calculatorPage.module.css';

function CalculatorPage() {
  return (
    <div className={styles.CalculatorPage}>
      <h2>Lets do some math!</h2>
      <Calculator name="Calculator 1.0" />
    </div>
  );
}

export default CalculatorPage;
