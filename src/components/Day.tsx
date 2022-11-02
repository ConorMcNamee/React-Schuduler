

const Day = (date:Date) => {

    const weekdays = 
    ["Monday", "Tuesday", "Wednesday", 
    "Thursday", "Friday", "Saturday", "Sunday"];

    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const numDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });
    
    
    const paddingDays = weekdays.indexOf(dateString.split(',')[0]);

    for(let i = 0; i < numDays + paddingDays; i++)
    {
        console.log(i + ", " + date.getDay(1))
    }
}

export default Day;