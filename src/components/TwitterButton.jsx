import React from 'react';
import {UseAppContext} from "../context/context";
import {BsTwitter} from "react-icons/bs"

const TwitterButton = () => {
    const context = UseAppContext()

    const handlePostTwitter = () => {
        console.log("Tweet")
    }

    return (
        <button className="button" style={{backgroundColor: context.randomColor}} onClick={handlePostTwitter}><BsTwitter/></button>
    );
};

export default TwitterButton;
