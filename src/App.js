import { useState } from 'react';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
   const [mode, setMode] = useState('light'); //wheather dark mode is enabled is on or not
   const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() =>{
        setAlert(null);
      }, 1500);
   }

  //  const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')
  

  //  }

   const toggelMode = () => {
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls)  
    if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#212529';
        showAlert(" Dark mode has been enabled", "success");
        //document.title= "TextUtils: Dark mode";
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'White';
        showAlert(" Light mode has been enabled", "success");
        //document.title= "TextUtils: Light mode";
      }
   }
  return (
    <>
{/* <Router>
    <Navbar title= "TextUtils" mode={mode} toggleMode={toggelMode}/>
    <Alert alert={alert}/>
    <div className="container">
    {/* <TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} /> */}


{/* <Routes>
  <Route path exact ="/about" element={<About />} />
  <Route path exact ="/" element={<TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} />} />
</Routes> */}

    
    
    {/* <About/> */}
    {/* </div> */}
    {/* // </Router> */}

    <Router>
      <div className="App">
      <Navbar title= "TextUtils" mode={mode} toggleMode={toggelMode}/>
      <Alert alert={alert}/>

        <div className="container">
          <Routes>
            <Route exact path="/" element = {<TextForm showAlert={showAlert} heading="Try TextUtils" mode={mode}  />}>
              {/* <TextForm showAlert={showAlert} heading="Enter your text here" mode={mode}  /> */}
            </Route>
            <Route exact path="/about" element = {<About mode={mode}/>}>
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
      

  </>
  );
}

export default App;
