import React from 'react';
import './styles/App.css';
import Sidebar from "./Sidebar";
import Navbartesti from "./components/navbar/Navbartesti";

function App() {

    return (
        <div className="App">
            <header className="App-header">

                <Sidebar/>
                <Navbartesti/>

            </header>
        </div>
    );
}

export default App;
