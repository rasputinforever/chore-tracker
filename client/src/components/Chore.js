import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';

// utils
import API from "../utils/API.js"

export default function Chore({ chore, setChores }) {
    
    console.log(chore)

    const [open, setOpen] = React.useState(false)
    const [complete, setComplete] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [edit, setEdit] = React.useState(false)
    const [editChore, setEditChore] = React.useState(Object.assign({}, chore))
    
    const handleOpen = (e) => {
        console.log(e)
        setOpen(!open)
        if (!open === false) {
            setEdit(false)
        }
    }

    const handleCheck = () => {
        console.log("Set that you did it")
        setComplete(true)
    }

    const handleComplete = () => {
        console.log("Submit that you did it")
        
        setLoading(true)

        // API submit here

        // IF SUCCESS: 
        setComplete(false)
    }

    const handleEdit = () => {
        setEdit(true)
    }

    const handleSave = async () => {
        console.log("Submit the edit")
        
        setLoading(true)

        // API submit here
        console.log("Sending this chore", editChore)
        const data = await API.putEditChore(editChore)
        // IF SUCCESS: 
        console.log("data", data)
        setChores(data.data)
        setEdit(false)


    }

    const handleInput = (e, cat) => {
        console.log(e.target.value, cat)
        const newEditChore = Object.assign({}, editChore)
        newEditChore[cat] = e.target.value
        setEditChore(newEditChore)
    }
    
  return (
      <>
        <Grid
        container 
            style={{backgroundColor: '#0099FF', width: '100%'}}            
        >            
            <Grid xs={2}>
                {
                    open ? 
                    <IconButton onClick={handleOpen}><AddIcon /></IconButton>                        
                        :
                    <IconButton onClick={handleOpen}><RemoveIcon /></IconButton>
                }                
            </Grid>
            <Grid xs={4}>{chore.name}</Grid>      
            <Grid xs={4}>{chore.interval}</Grid>     
            <Grid xs={2}><IconButton onClick={handleCheck}><CheckIcon /></IconButton>  </Grid>            

        </Grid>

        {/* details and editing */}
        {open ? 
        <Grid container>            
            {edit ? 
            <>
                <Grid xs={2}><IconButton onClick={handleSave} disabled={JSON.stringify(editChore) === JSON.stringify(chore)}><SaveIcon /></IconButton></Grid>      
                <Grid xs={8}>
                    Name: <TextField value={editChore.name} onChange={(e) => {handleInput(e, 'name')}}></TextField>
                    Description: <TextField value={editChore.description} onChange={(e) => {handleInput(e, 'description')}}></TextField>
                    Interval (days): <TextField value={editChore.interval} onChange={(e) => {handleInput(e, 'interval')}}></TextField>
                    Last Performed (days): <TextField value={editChore.lastDate} onChange={(e) => {handleInput(e, 'lastDate')}}></TextField>
                </Grid>  

            </> :
            <>            
                <Grid xs={2}><IconButton onClick={handleEdit} ><EditIcon /></IconButton></Grid>      
                <Grid xs={4}>{chore.description}</Grid>  
            </>}
        </Grid>
        : null}

        {/* Submit complete work */}
        {complete ? 
        <Grid container>                            
            <Grid xs={4}>Date complete:</Grid>  
            <Grid xs={2}><IconButton onClick={handleComplete}><SaveIcon /></IconButton>  </Grid>  
        </Grid>
        : null}

      </>
  );
}