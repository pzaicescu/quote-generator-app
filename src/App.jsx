import React from 'react';
import "./App.css"
import Quote from "./components/Quote";
import {AppContextProvider} from "./context/context";

const App = () => {

    return (
        <div>
            <AppContextProvider>
                <Quote/>
                <h5 style={{color: "white", float: "right"}}>@pzaicescu - GitHub</h5>
            </AppContextProvider>
        </div>
    );
};

export default App;
