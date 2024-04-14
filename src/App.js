import './App.css';
import React, {  useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
// import Nopage from './components/Nopage';

function App() {
  const [progress, setProg] = useState(0)
  // const loadingBar= useRef(null);
  // const simulating = () => {
  //   loadingBar.current.continuousStart();
  //   setTimeout(()=>{
  //     loadingBar.current.complete();
  //   }, 2000);
    
  // }
  const setProgress=(progress) =>{
    setProg(progress);
  }
  return (
    <>
      

      <BrowserRouter>
      <Navbar/>
      <LoadingBar
        color='yellow'
        progress={progress}
        height={3}
      />
      <Routes>
        <Route exact={true} path='/Home' element={<Main setProgress={setProgress}/>}/>
        <Route path='/contact' element={<Contact setProgress={setProgress}/>}/>
        <Route path='/about' element={<About setProgress={setProgress}/>}/>
        {/* <Route path='*' element={<Nopage setProgress={setProgress}/>}/> */}
      </Routes>
      <Footer/>
    </BrowserRouter>

      
    </>
  );
}

export default App;
