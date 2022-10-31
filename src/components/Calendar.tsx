import React from "react";
import { useEffect, useState } from "react";

import "./Calendar.css";

/*
    The goal of this Application is to create a Calendar style app
    with many different views that allows you to schedule events.
    The Application should also be fully customizable
    
*/


const FormatDate = () => {
    // Get the Current Date
    let date = new Date();

    // Display a tile for each day in the month
}




// Display Calendar Comp
const Calendar = () => {

    useEffect(() => {
        console.log("Hello World")
    }, []);

    return (
        <div className="schedulerAppContainer">
            <table className="schedulerApp">
                <tr className="schedulerAppRow">
                    <td className="schedulerAppCol">
                    Monday
                    </td>

                    <td className="schedulerAppCol">
                        Tuesday
                    </td>

                    <td className="schedulerAppCol">
                        Wednesday
                    </td>

                    <td className="schedulerAppCol">
                        Thursday
                    </td>

                    <td className="schedulerAppCol">
                        Friday
                    </td>

                    <td className="schedulerAppCol">
                        Saturday
                    </td>

                    <td className="schedulerAppCol">
                        Sunday
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Calendar;