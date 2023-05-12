import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import Sidebar from './components/Sidebar';
import StatefulClass from './components/StatefulClass';
import NavBarSimple from './components/NavBarSimple';

function App() {
    return (
        <div className="App">
            <FunctionalGreeting />
            <NavBarSimple />
            <StatefulClass greeting="stateful rocks" name="Sam" />
            <Sidebar />
            <FunctionalGreetingWithProps greeting="nice to meet you" name="Mike" age="32" />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
