import React from 'react';

import {Routes, Route} from 'react-router-dom';
import Table from './Table';
import Home from './Home';
import UiDesign from './Datainsertion'
import Docappointment from './Docappointment';
import Adminlogin from './Adminlogin';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/Table' element={<Table/>}></Route>
        <Route path='/UiDesign' element={<UiDesign/>}></Route>
        <Route path='/Adminlogin' element={<Adminlogin/>}></Route>
        <Route path='/Docappointment' element={<Docappointment/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
