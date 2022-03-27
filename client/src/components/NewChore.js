import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// utils
import API from "../utils/API.js"

export default function NewChore({ setNewChoreMode, setChores }) {
    const [input, setInput] = React.useState({
        name: '',
        interval: '',
        description: ''
    })

    const handleInput = (e, cat) => {
        const newInput = Object.assign({}, input);
        
        newInput[cat] = e.target.value
        setInput(newInput)
    }
    
    const submitChore = async () => {
        const data = await API.putChore({user: 'Test', data: input})
        // setChores(data.data)
        setNewChoreMode(false)
        setInput({
            name: '',
            interval: '',
            description: ''
        })
    }


  return (
      <>
      <Card sx={{ 
            boxShadow: 1,
            m: 1,
            minWidth: 300
           }}>

            {/* Active */}
            <CardContent>
                
            <Typography gutterBottom variant="h5" component="div">
                New Chore
            </Typography>


            <Typography gutterBottom variant="h8" component="div">
                Chore or Task Name: 
            </Typography>
            
            <TextField color='primary' variant="outlined" value={input.name} onChange={(e) => handleInput(e, 'name')}/>

            <Typography gutterBottom variant="h8" component="div">
                Description: 
            </Typography>
                    <TextField color='primary' variant="outlined" value={input.description} onChange={(e) => handleInput(e, 'description')}/>
                    

            <Typography variant="body2" color="text.secondary">
                How often should this be done in days (enter "NA" if it's a one-time task): 
            </Typography>
            <TextField variant="outlined" value={input.interval} onChange={(e) => handleInput(e, 'interval')} />
            </CardContent>

            <CardActions>
                <Button variant="contained" endIcon={<SendIcon />} onClick={submitChore}>
                    Save
                </Button>
                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => setNewChoreMode(false)}>
                        Cancel
                </Button>
            </CardActions>
        </Card>


      </>
  );
}