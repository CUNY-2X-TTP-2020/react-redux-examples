import React from 'react';
import './App.css';

import CounterContainer from "../components/containers/CounterContainer";

function App() 
{
    return (
        <div className="App">
            <header className="App-header">
                <CounterContainer />
            </header>
        </div>
    );
}

export default App;