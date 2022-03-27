import React ,{ useEffect } from 'react';

// components
import NewChore from './NewChore.js'
import Chore from './Chore.js'

// material ui
import Typography from '@mui/material/Typography'
import CoffeeIcon from '@mui/icons-material/Coffee';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import TextField from '@mui/material/TextField';

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

    const getUserName = () => {

        return localStorage.getItem('userName') ? JSON.parse(localStorage.getItem('userName')) : '';
    }

    const [userName, setUserName] = React.useState(getUserName())
    const [editUserName, setEditUserName] = React.useState(false)
    
    const handleUserNameEdit = () => {
        setEditUserName(true)
    }

    const handleSaveUserName = () => {
        localStorage.setItem('userName', JSON.stringify(userName));

        setEditUserName(false)
    }

    const handleEntry = (e) => {

        setUserName(e.target.value)
    }

    return (
        <div style={{backgroundColor: '#A5C8E4', height: '100vh', width: '100vw'}}>
        
      
        
        <Typography>Chore App</Typography>    
                
        {newChoreMode ? 
            <NewChore setNewChoreMode={setNewChoreMode} /> 
                : 
            <Button onClick={() => setNewChoreMode(true)} endIcon={<CoffeeIcon />}>New Chore</Button>
        }

        {editUserName ? 
            <div style={{float: 'right'}}>
                <Typography variant='span'>UserName:</Typography> <TextField value={userName} onChange={handleEntry}/><IconButton onClick={handleSaveUserName} ><SaveIcon /></IconButton>
            </div>
            : 
            <div style={{float: 'right'}}>
                 <Typography variant='span'>UserName:</Typography>  {userName} <IconButton onClick={handleUserNameEdit} ><EditIcon /></IconButton>
            </div>
        }

        {chores.map((c, i) => {
            return (
                <Chore key={i} chore={c} setChores={setChores} userName={userName}/>
            )
        })}

                
        </div>
    )
}

export default Home;
