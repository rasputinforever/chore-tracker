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


// utils
import API from "../utils/API.js"

export default function Chore({ chore }) {
    
    const [open, setOpen] = React.useState(false)

    console.log(chore.name, open)

    const handleOpen = (e) => {
        console.log(e)
        setOpen(!open)
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

        </Grid>
        {open ? 
        <Grid>
            open
        </Grid>
        : null}

      </>
  );
}