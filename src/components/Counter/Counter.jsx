// import useState from 'react';
import { useState } from 'react';
import s from './Counter.module.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prev => prev + step);
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  const [step, setStep] = useState(1);
  const handleStep = e => {
    setStep(+e.target.value);
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{count}</h1>

        <input value={step} onChange={handleStep} />
        <div className={s.flex}>
          <button className="btn" onClick={handleDecrement}>
            minus
          </button>
          <button className="btn" onClick={handleReset}>
            reset
          </button>
          <button className="btn" onClick={handleIncrement}>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
