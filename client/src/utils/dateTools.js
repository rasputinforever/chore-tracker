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
    daysLeft: (days) => {
        const t = new Date();
        const date = ('0' + t.getDate()).slice(-2);
        const month = ('0' + (t.getMonth() + 1)).slice(-2);
        const year = t.getFullYear();

        const time = `${month}/${date}/${year}`;

        return time
    }
}

export default dateTools
