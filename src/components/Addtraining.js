import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

export default function AddTraining(props) {
    console.log('AddTraining props', props)
    const [open, setOpen] = React.useState(false)
    const [training, setTraining] = React.useState({
        date: '', duration: '', activity: ''})


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    setTraining({...training, [event.target.name]: event.target.value})
  }

  const addTraining = () => {
      console.log('addTraining', props.customer.links[0].href)
      saveTraining(training)
      handleClose()
  }

  const saveTraining = (training) => {        
    training.customer = props.customer.links[0].href
    console.log('Jore training', training)
    const [day, month, year] = training.date.split('.')
    const newDate = new Date(year, month-1, day)
    training.date = newDate
    fetch('https://customerrest.herokuapp.com/api/trainings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(training)
    })
    .then(window.location.reload(false))
    .catch(err => console.error(err))
    }

    return(
        <div>
        <Button size="small" variant="outlined" color="primary" onClick={handleClickOpen}>
            Add Training
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Training</DialogTitle>
            <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  name="date"
                  value={training.date}
                  onChange={event => handleInputChange(event)}
                  label="Date"
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  name="duration"
                  value={training.duration}
                  onChange={event => handleInputChange(event)}
                  label="Duration"
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  name="activity"
                  value={training.activity}
                  onChange={event => handleInputChange(event)}
                  label="Activity"
                  fullWidth
                />
            </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addTraining} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}