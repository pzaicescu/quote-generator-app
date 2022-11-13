import React from 'react';
import "./App.css"
import Quote from "./components/Quote";
import {AppContextProvider} from "./context/context";

const App = () => {

    return (
        <div>
            <AppContextProvider>
                <Quote/>
            </AppContextProvider>
        </div>
    );
};

export default App;
