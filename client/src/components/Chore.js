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
import CloseIcon from '@mui/icons-material/Close';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CancelIcon from '@mui/icons-material/Cancel';

// utils
import API from "../utils/API.js"
import dateTools from '../utils/dateTools.js';

export default function Chore({ chore, setChores, userName }) {
    
    console.log(chore)

    const [open, setOpen] = React.useState(false)
    const [complete, setComplete] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [edit, setEdit] = React.useState(false)
    const [editChore, setEditChore] = React.useState(Object.assign({}, chore))
    
    const handleDefault = () => {
        
        setEdit(false)
        setComplete(false)
    }

    const handleCheck = () => {
        console.log("Set that you did it")
        setEdit(false)    
        setComplete(true)
    }
    
    const handleComplete = async () => {
        console.log("Submit that you did it")
            
        setLoading(true)

        // set last perforemd to 0
        const sendChore = Object.assign({}, editChore)
        sendChore.lastDate = dateTools.dateNow()
        sendChore.person = userName
        // API submit here
        console.log("Sending this chore", sendChore)
        const data = await API.putEditChore(sendChore)
        // IF SUCCESS: 
        setChores(data.data)

        // IF SUCCESS: 
        setComplete(false)
    }

    const handleEdit = () => {
        setEdit(true)
        setComplete(false)
    }

    const handleSave = async () => {        
        setLoading(true)
        // API submit here
        const data = await API.putEditChore(editChore)
        // IF SUCCESS: 
        setChores(data.data)
        setEdit(false)
    }

    const handleInput = (e, cat) => {        
        const newEditChore = Object.assign({}, editChore)
        newEditChore[cat] = e.target.value
        setEditChore(newEditChore)
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
                    {chore.name}
                </Typography>

                {/* Done or Not Done */}
                {!chore.lastDate ?
                <>
                    {/* Not Done */}
                    <Typography gutterBottom variant="h8" component="div">
                        Not Yet Done
                    </Typography>
                </>
                :
                <>
                    {/* Done */}
{/* Has an "interval" or not */}
                    <Typography gutterBottom variant="h8" component="div">
                        Last Performed by {chore.person} on {chore.lastDate}
                    </Typography>
                    <Typography gutterBottom variant="h8" component="div">
                        Next Day Due: {dateTools.dateDue(chore.lastDate, chore.interval)}
                    </Typography>
                </>
                }
                
                
                <Typography variant="body2" color="text.secondary">
                    {chore.description}
                </Typography>
            </CardContent>

                {/* Hide these when other modes are active */}
                {!edit && !complete ? 
                <CardActions>
                    <Button size="small" onClick={handleEdit} endIcon={<EditIcon />} >Edit</Button>
                    <Button size="small" onClick={handleCheck} endIcon={<CheckIcon />} >Mark as Done</Button>
                </CardActions>
                : null}

           {edit ? 
           <>
                {/* Edit Mode */}
            <Typography gutterBottom variant="h8" component="div">
                Chore or Task Name: 
            </Typography>
            <TextField value={editChore.name} onChange={(e) => {handleInput(e, 'name')}}></TextField>

            <Typography gutterBottom variant="h8" component="div">
                Description: 
            </Typography>
            <TextField value={editChore.description} onChange={(e) => {handleInput(e, 'description')}}></TextField>

            <Typography variant="body2" color="text.secondary">
                How often should this be done in days (enter "NA" if it's a one-time task): 
            </Typography>
            <TextField value={editChore.interval} onChange={(e) => {handleInput(e, 'interval')}}></TextField>

            <Typography variant="body2" color="text.secondary">
                Date that this chore was last performed: 
            </Typography>
            <TextField value={editChore.lastDate} onChange={(e) => {handleInput(e, 'lastDate')}}></TextField>
            
            <CardActions>            
                <Button size="small" onClick={handleSave} endIcon={<SaveIcon />} >Save Changes</Button>
                <Button size="small" onClick={handleDefault} endIcon={<CancelIcon />} >Cancel</Button>
            </CardActions>

           </>
           : null}


        {/* Submit complete work */}
        {complete ?         
            <>
            <Typography gutterBottom variant="h8" component="div">
                Mark as Complete?
            </Typography>

            <Typography variant="body2" color="text.secondary">
                Date Performed
            </Typography>
            
            <TextField value={editChore.lastDate} onChange={(e) => {handleInput(e, 'lastDate')}}></TextField>
            
            <CardActions>    
                <Button size="small" onClick={handleComplete} endIcon={<SaveIcon />} >Confirm Complete</Button>
                <Button size="small" onClick={handleDefault} endIcon={<CancelIcon />} >Cancel</Button>        
            </CardActions>
            </>
        : null}

            </Card>

        
        {/* details and editing */}



      </>
  );
}