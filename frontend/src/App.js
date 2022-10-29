import React, { useState } from "react";
import './App.css';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Aboutpage from './Components/Aboutpage/Aboutpage';
import Contactpage from './Components/Contactpage/Contactpage';
import Pagenotfound from './Components/Pagenotfound/Pagenotfound';
import SuccessfulPage from './Components/SuccessfulPage/SuccessfulPage';
import Adminpage from './Components/Adminpage/Adminpage';
import Adminauth from './Components/Adminauth/Adminauth';

function App() {

  const [user, setLoggedUser] = useState({});
  // const loggedIn = window.localStorage.getItem("isLoggedIn");
  // console.log(loggedIn);

  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<Aboutpage />}></Route>
        <Route path="/contact" element={<Contactpage />}></Route>
        <Route path="/success" element={<SuccessfulPage />}></Route>
        <Route path="/admin&931Ea1nz7B&" element={user && user._id ? <Adminpage /> : <Adminauth setLoggedUser={setLoggedUser} />}></Route>
        <Route path="/admincred3$vCtVAHJ505" element={<Adminauth setLoggedUser={setLoggedUser} />}></Route>

        <Route path="*" element={<Pagenotfound />}></Route>
      </Routes>
    </div>
  );
}

export default App;