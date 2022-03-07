import React from 'react';

// material ui
import Typography from '@mui/material/Typography'
import CoffeeIcon from '@mui/icons-material/Coffee';

// utils
import API from "../utils/API.js"


function Home() {

    const getChores = async () => {
        const data = await API.getChores({userName: 'erik'})
        console.log(data)
    }

    return (
<>
        <button onClick={getChores} >Test</button>
        <CoffeeIcon />
</>
    )
}

export default Home;
