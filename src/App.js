import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Invitation from './Invitation';
import Chat from './Chat';
import Inchat from './Inchat';
import Signup from './Signup';
import Setting from './Setting';
import Activity from './Youractivity'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Login/>}></Route>
        <Route path='/Invitation' element={<Invitation/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Chat' element={<Chat/>}></Route>
        <Route path='/Inchat' element={<Inchat/>}></Route>
        <Route path='/Setting' element={<Setting/>}></Route>
        <Route path='/Activity' element={<Activity/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
