import React from 'react'
import './App.css'
import Customerlist from './components/Customerlist'
import Trainingslist from './components/Trainingslist'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

function App() {
  return (
    <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Personal trainer
            </Typography>
          </Toolbar>
        </AppBar>
      <Customerlist />  
      <Trainingslist />
    </div>
  )
}

export default App
