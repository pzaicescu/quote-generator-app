import React from 'react';
import {UseAppContext} from "../context/context";

const NewQuoteButton = () => {
    const context = UseAppContext();

    const handleClick = () => {
        context.setRandomNumber(Math.floor(Math.random() * context.quotes.length))
        context.setRandomColor('#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'))
    }

    return (
        <button onClick={handleClick} className="button" style={{backgroundColor: context.randomColor}}>New quote</button>
    );
};

export default NewQuoteButton;
