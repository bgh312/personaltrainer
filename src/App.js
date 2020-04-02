import React from 'react'
import './App.css'
import Customerlist from './components/Customerlist'
import Trainingslist from './components/Trainingslist'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

function App() {
  return (
    <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Personal trainer
            </Typography>
            <Typography style={{margin: 10}} variant="h6">
              <Link color="inherit" href="#trainings">Trainings</Link>
            </Typography>
            <Typography style={{margin: 10}} variant="h6">
              <Link color="inherit" href="#customers">Customers</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      <Customerlist />  
      <Trainingslist />
    </div>
  )
}

export default App
