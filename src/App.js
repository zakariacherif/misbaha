import React, { useState } from 'react';
import './styles.css';
import img from "./misbaha.png"

const App = () => {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState('0');

    const handleSetCounter = () => {
        const newValue = parseInt(inputValue);
        if (!isNaN(newValue) && newValue >= 0) {
            setCounter(newValue);
        } else {
            // Optional: Handle invalid input scenario
            alert('Please enter a valid number greater than or equal to zero.');
        }
    };

    const handleDecreaseCounter = () => {
        if (counter > 0) {
            setCounter(prevCount => prevCount - 1);
        }
    };

    const handleResetCounter = () => {
        setCounter(0);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <>
            <input
                className='myNumber'
                type='number'
                value={inputValue}
                onChange={handleInputChange}
            />
            <br />
            <br />
            <button className='myBtn' onClick={handleSetCounter}>حدد وردك</button>
            <img className='misbaha' src={img} alt="Misbaha" />
            <span className='decSpan' onClick={handleDecreaseCounter}>-</span>
            <span className='resSpan' onClick={handleResetCounter}></span>
            <h1 className='myTxt'>
                {counter}
            </h1>
        </>
    );
};

export default App;
