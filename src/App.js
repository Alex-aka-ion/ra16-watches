import './App.css';
import React, {useState} from "react";
import Clock from "./components/Clock";
import ClockAddForm from "./components/ClockAddForm";

function App() {
    const [watches, setWatch] = useState([]);

    const addClock = (newWatch) => {
        setWatch([...watches, newWatch]);
    }

    const onDelete = (itemToDelete) => {
        setWatch(watches.filter((i) => i !== itemToDelete));
    }

    return (
        <div className="App">
            <ClockAddForm addClock={addClock}/>
            {watches.map((item, index) => <Clock key={index} timeZone={item} onDelete={onDelete}/>)}
        </div>
    );
}

export default App;
