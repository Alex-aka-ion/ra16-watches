import React, { useState } from "react";
import moment from "moment";
import 'moment-timezone';

const tzNames = moment.tz.names();

export default function ClockAddForm(props) {

    const [selectedValue, setSelectedValue] = useState('');

    const addClock = (e) => {
        e.preventDefault();
        props.addClock(selectedValue);
    }

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    }

    return <form>
        <select value={selectedValue} onChange={handleChange}>
            <option value=''>--выберите временную зону--</option>
            {tzNames.map((item, index) => <option key={index} value={item}>{item}</option> )}
        </select>
        <button onClick={addClock}>Добавить</button>
    </form>

}
