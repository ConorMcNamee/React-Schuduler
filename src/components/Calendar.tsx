import React from "react";

import "./Calendar.css";

const Calendar = () => {

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