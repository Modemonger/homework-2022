import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Autocompleate from './components/autocomplete';
function App() {
    return (
        <div className="App">
            <Header/>
            <Autocompleate/>
        </div>
    );
}

export default App;
