import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from "axios";

const AppContext = createContext(undefined);

// Hook to provide access to context object
export const UseAppContext = () => {
    return useContext(AppContext);
};

export const AppContextProvider = (props) => {
    const url = "https://type.fit/api/quotes";

    const [quotes, setQuotes] = useState([])
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100))
    const [loading, setLoading] = useState(false)
    const [randomColor, setRandomColor] = useState('#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'))

    useEffect(() => {
        const fetchQuote = async () => {
            setLoading(true)
            try {
                const response = await axios.get(url)
                setQuotes(response.data)
            } catch (error) {
                console.log(`Error: ${error}`)
            }
            setLoading(false)
        }
        fetchQuote()
    }, [])

    return (
        <AppContext.Provider value={{quotes, randomNumber, setRandomNumber, loading, randomColor, setRandomColor}}>
            {props.children}
        </AppContext.Provider>
    );
};
