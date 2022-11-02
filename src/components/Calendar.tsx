import React from "react";
import { useEffect, useState } from "react";
import "./Calendar.css";

import "./Calendar.css";

// Component Imports
import Day from "./Day";

/*
    The goal of this Application is to create a Calendar style app
    with many different views that allows you to schedule events.
    The Application should also be fully customizable
    
*/

const Calendar = () => {

    const [date, setDate] = useState(new Date());
    const [day, setDay] = useState(date.getDay());
    const [month, setMonth] = useState(date.getMonth());
    const [year, setYear] = useState(date.getFullYear());

    const daysInMonth = (month:number) => {
        return new Date(year, month, 0).getDate();
    }

    console.log(Day(date));

    return (
        <div className="schedulerApp">
            <table className="">
                <tr className="weekdays">
                </tr>
            </table>
        </div>
    );
}

export default Calendar;