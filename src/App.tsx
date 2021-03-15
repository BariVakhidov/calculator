import React, {useState} from 'react';
import './App.css';
import Calculator from "./components/Calculator/Calculator";
import Switcher from "./components/Switcher";

const App = () => {
    const [isBlack, setBlackTheme] = useState(false);
        return (
            <div className={isBlack? "AppBlack" : "App"}>
                <div className="app-wrapper">
                  <Calculator isBlack={isBlack} />
                  <Switcher isBlackTheme={setBlackTheme} blackTheme={isBlack} />
                </div>
            </div>
        );
    }
export default App;
