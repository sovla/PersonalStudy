import logo from "./logo.svg";
import "./App.css";
import OrderPage from "./pages/OrderPage";
import { OrderContextProvider } from "./contexts/OrderContext";

function App() {
    return (
        <div className="App">
            <OrderContextProvider>
                <OrderPage />
            </OrderContextProvider>
        </div>
    );
}

export default App;
