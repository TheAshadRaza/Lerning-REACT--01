import './App.css';
import React, { useState } from 'react';
import Navbar from './component/Navbar';
// import About from './component/About';
import TextForm from './component/textForm';
import Alert from './component/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has enable", "success")
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light Mode has enable", "warning")

    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <TextForm/>
      <Alert alert={alert} />

      <div className="container">
        {/* <About/> */}

{/*        
<Router>
              <Routes>
                <Route
                  path="/about"
                  component={<About/>}
                />
              </Routes>
              
              <Routes>
              <Route path="/" component='{<TextForm/>}'/>
              
              </Routes>
  </Router> */}
    
);
      </div>

    </>
  );
}

export default App;
