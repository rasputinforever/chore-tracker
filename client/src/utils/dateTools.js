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
    dateRelative: (days) => {
        const t = new Date();
        const date = ('0' + t.getDate()).slice(-2);
        const month = ('0' + (t.getMonth() + 1)).slice(-2);
        const year = t.getFullYear();

        const time = `${month}/${date}/${year}`;

        return time
    }
}

export default dateTools
