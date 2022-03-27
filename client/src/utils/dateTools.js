const dateTools = {
    dateNow: () => {
        const t = new Date();
        const date = ('0' + t.getDate()).slice(-2);
        const month = ('0' + (t.getMonth() + 1)).slice(-2);
        const year = t.getFullYear();

        const time = `${month}/${date}/${year}`;
        console.log(time)
        return time
    },
    dateDue: (lastPerformed, days) => {
        const today = new Date(lastPerformed);

        // add days
        today.setDate(today.getDate() + parseInt(days));
        
        const date = ('0' + today.getDate()).slice(-2);
        const month = ('0' + (today.getMonth() + 1)).slice(-2);
        const year = today.getFullYear();

        const time = `${month}/${date}/${year}`;

        return time
    },
    daysLeft: (lastDate, nextDate) => {
        
        let date1 = new Date(nextDate);
        let date2 = new Date(lastDate);
        let timeInMilisec = date1.getTime() - date2.getTime();
        let daysBetweenDates = Math.ceil(timeInMilisec / (1000 * 60 * 60 * 24));

        return daysBetweenDates
    }
}

export default dateTools
