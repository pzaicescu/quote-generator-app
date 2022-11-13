import React from 'react';
import {UseAppContext} from "../context/context";

const Button = () => {
    const context = UseAppContext();

    const handleClick = () => {
        context.setRandomNumber(Math.floor(Math.random() * context.quotes.length))
        context.setRandomColor('#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'))
    }

    return (
        <button onClick={handleClick}>New quote</button>
    );
};

export default Button;
