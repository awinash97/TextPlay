// new ideas
// colouring text -> copy to clipboard -> share to whatsapp
// capitalization
// copy to clipboard at top right box
// create new home page where it displayes 1) 


import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState("")

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1000)
  }

  const toggleMode = (type) => {
    console.log(type)
    if(mode === "" || mode.color === 'light') { 
      setMode({
        color : (type === 'lb' || type === 'lg' || type === 'ly' ) ? 'light' : 'dark',
        type : type
      })
      if(type === "lb"){document.body.style.backgroundColor = "#bfd0f6"; showAlert("light Blue has been enabled", "success") }
      else if(type === "lg"){document.body.style.backgroundColor = "#c5f6bf"; showAlert("light Green has been enabled", "success") }
      else if(type === "ly"){document.body.style.backgroundColor = "#f5f6bf"; showAlert("light Yellow has been enabled", "success") }
      else{ document.title = "TextPlay - Dark mode"; document.body.style.backgroundColor = "#2a2b2c"; showAlert("Dark mode has been enabled", "success") }
    }
    else {
      setMode({
        color : (type === 'db' || type === 'dg' || type === 'dy') ? 'dark' : 'light',
        type : type
      })
      if(type === "db"){document.body.style.backgroundColor = "#03294f"; showAlert("Dark Blue has been enabled", "success") }
      else if(type === "dg"){document.body.style.backgroundColor = "#0c7f0a"; showAlert("Dark Green has been enabled", "success") }
      else if(type === "dy"){document.body.style.backgroundColor = "#beb110"; showAlert("Dark Yellow has been enabled", "success") }
      else{document.title = "TextPlay - Light mode"; document.body.style.backgroundColor = "white"; showAlert("Light mode has been enabled", "success") }

    }
  }

  return (
    <>
    {/* test comment */}
      <Router>
        <Navbar title="TextPlay" mode={mode} changeMode={toggleMode}/>
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
              <Route exact path="/about">
                <About mode={mode}/>
              </Route>
              <Route exact path="/">
                <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
              </Route>
            </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
