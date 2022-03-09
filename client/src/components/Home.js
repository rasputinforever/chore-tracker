import React ,{ useEffect } from 'react';

// components
import NewChore from './NewChore.js'

// material ui
import Typography from '@mui/material/Typography'
import CoffeeIcon from '@mui/icons-material/Coffee';
import Button from '@mui/material/Button';

// utils
import API from "../utils/API.js"


function Home() {
    const [chores, setChores] = React.useState([])

    const getChores = async () => {
        const data = await API.getChores({userName: 'erik'})
        console.log(data)
        setChores(data.data)
    }
    
    
    useEffect(() => {
        getChores()
    } ,[])



    const [newChoreMode, setNewChoreMode] = React.useState(false)

    console.log(chores)

    return (
        <>  
                
                
                {newChoreMode ? <NewChore setNewChoreMode={setNewChoreMode} /> : <Button variant='contained' onClick={() => setNewChoreMode(true)} endIcon={<CoffeeIcon />}>New Chore</Button>}
                {chores.map((c, i) => {
                    return (
                        <p key={i}>Name:{c.name}</p>
                    )
                })}

                
        </>
    )
}

export default Home;
