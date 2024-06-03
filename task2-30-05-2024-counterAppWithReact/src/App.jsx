import { useState } from 'react'

import './App.css'

function App() {

  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [streak, setStreak] = useState(0);

  const [incCounter, setincCounter] = useState(0);
  const [decCounter, setdecCounter] = useState(0);
  const [resCounter, setresCounter] = useState(0);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    // Eğer value sayı ise count state'ini güncelle
    if (!isNaN(value) && value !== '') {
      setCount(Number(value));
    }
  };

  const Increment = () => {
    setCount(count + 1);
    setInputValue('0');
    setincCounter(incCounter + 1);
    Streak();
  }

  const Decrement = () => {
    setCount(count - 1);
    setInputValue('0');
    setdecCounter(decCounter + 1);
    setStreak(0);
  }

  const Reset = () => {
    setCount(0);
    setInputValue('0');
    setresCounter(resCounter + 1);

  }

  const Streak = () => {
    setStreak(streak + 1);
  };

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>

        {/* counter interface */}
        <div>
          <h1>Sayaç: {count}</h1>
          <h1>Streak: {streak}</h1>
          <div>
            <input
              type="text"
              placeholder='Başlangıç değerini girin'
              id='numberInput'
              onChange={handleInputChange}
              value={inputValue}
            />
          </div>
          <div style={{ marginTop: '10px' }}>
            <button onClick={Increment}>Arttır</button>
            <button onClick={Decrement}>Azalt</button>
            <button onClick={Reset}>Sıfırla</button>
          </div>
        </div>

        {/* table */}
        <div>
          <table>
            <thead>
              <tr>
                <th style={{ border: 0 }}>Logg</th>
              </tr>
              <tr>
                <th>+</th>
                <th>-</th>
                <th>0</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{incCounter}</td>
                <td>{decCounter}</td>
                <td>{resCounter}</td>
              </tr>
            </tbody>

          </table>
        </div>

      </div>

    </>
  )
}

export default App
