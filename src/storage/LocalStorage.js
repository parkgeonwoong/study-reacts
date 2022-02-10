import React, { useState, useEffect } from 'react';
import './LocalStorage.scss';

const LocalStorage = () => {
  const [count, setCount] = useState(
    () => JSON.parse(window.localStorage.getItem('count')) || 0,
  );

  useEffect(() => {
    window.localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  const onRemove = () => {
    window.localStorage.removeItem('count');
    setCount(0);
  };

  return (
    <div className="LocalStorage">
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => onRemove()}>초기화</button>
    </div>
  );
};

export default LocalStorage;
