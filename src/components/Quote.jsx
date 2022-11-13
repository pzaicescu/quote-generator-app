import React, {useEffect} from 'react';
import Button from "./Button";
import {UseAppContext} from "../context/context";

const Quote = () => {
    const context = UseAppContext();

    useEffect(()=> {
        document.body.style.backgroundColor = context.randomColor
    }, [context.randomColor])

    if (context.loading) {
        return <h4>Loading...</h4>
    }

    return (
        <div className="quote-box">
            <h1 style={{color: context?.randomColor}}>{context.quotes[context.randomNumber]?.text}</h1>
            {context.quotes[context.randomNumber]?.author && <h4 style={{color: context?.randomColor}}>- {context.quotes[context.randomNumber]?.author}</h4>}
            <Button/>
        </div>
    );
};

export default Quote;
