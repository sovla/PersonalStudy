import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);
    return (
        <div className="App">
            <header className="App-header">
                <h3 data-testid="counter">{counter}</h3>
                <div>
                    <button
                        onClick={() => setCounter((prev) => prev + 1)}
                        data-testid="plus-button"
                        disabled={isDisabled}
                    >
                        +
                    </button>
                    <button
                        onClick={() => setCounter((prev) => prev - 1)}
                        data-testid="minus-button"
                        disabled={isDisabled}
                    >
                        -
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => setIsDisabled((prev) => !prev)}
                        data-testid="on/off-button"
                        style={{ backgroundColor: "blue" }}
                    ></button>
                </div>
            </header>
        </div>
    );
}

export default App;
