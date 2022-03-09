import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
        setNewChoreMode(false)
        setInput({
            name: '',
            interval: '',
            description: ''
        })
    }


  return (
      <>
        <Box
            style={{backgroundColor: '#0099FF'}}
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div style={{width: '90%', backgroundColor: 'white', textAlign: 'center', margin: 'auto'}}>

                <div>
                    <TextField color='primary' style={{margin: '5px', width: '70%'}} label="Name of Chore" variant="outlined" value={input.name} onChange={(e) => handleInput(e, 'name')}/>
                    <TextField style={{margin: '5px', width: '20%'}}  label="Interval (days)" variant="outlined" value={input.interval} onChange={(e) => handleInput(e, 'interval')} />
                </div>

                <br />

                <TextField style={{margin: '5px', width: '90%'}} id="outlined-basic" label="Description" variant="outlined" value={input.description} onChange={(e) => handleInput(e, 'description')} />


                <Stack direction="row" spacing={2}>
                    <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => setNewChoreMode(false)}>
                        Exit
                    </Button>
                    <Button variant="contained" endIcon={<SendIcon />} onClick={submitChore}>
                        Send
                    </Button>
                </Stack>

            </div>
        </Box>

      </>
  );
}