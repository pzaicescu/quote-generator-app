import React from 'react';
import {UseAppContext} from "../context/context";
import {BsTwitter} from "react-icons/bs"

const TwitterButton = () => {
    const context = UseAppContext()

    const quoteToPost = {
        quote: context.quotes[context.randomNumber]?.text,
        author: context.quotes[context.randomNumber]?.author || "Unknown author"
    }

    return (
        <a className="button"
           style={{backgroundColor: context.randomColor}}
           href={`https://twitter.com/intent/tweet?text=${quoteToPost.quote}%20-%20${quoteToPost.author}`}
        >
            <BsTwitter style={{height: "20px", width: "20px"}}/>
        </a>

    );
};

export default TwitterButton;
