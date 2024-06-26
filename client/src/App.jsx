import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import Home from "./Pages/Home";
import About from "./Pages/About";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import Header from './Components/Header';
import PrivateRoute from './Components/PrivateRoute';
import CreateListing from './Pages/CreateListing';

export default function App() {
  return(
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route element={<PrivateRoute/>}>
        <Route path='/profile' element={<Profile/>} />
        <Route path='/create-listing' element={<CreateListing/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
