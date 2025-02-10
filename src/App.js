import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPages from './pages/NoPages';
import ColorButton from './ColorButton';
import Counter from './Counter';
import Toogle from './Toogle';
import Toggle from './Toggle';
import Input from './Input';
import Modal from './Modal';
import LocalStorage from './LocalStorage';
import AutoCount from './AutoCount';
import Mode from './Mode';
import Drawer from './Drawer';
import Loader from './Loader';
import AutoCounter from './AutoCounter';
import Card from './Card';
import Json from './Json';
import NestedJson from './NestedJson';
import Accordian from './Accordian';
import GoToTop from './GoToTop';
import Fromik from './Fromik';
import Bdata from './Bdata';
import Register from './Register';
import Mail from './Mail';



const App = () => {
return (
<div>
<BrowserRouter>
<Header/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact />} />
<Route path='/color' element={<ColorButton/>}/>  
<Route path='/counter' element={<Counter />} />  
<Route path='/toogle' element={<Toogle />} />  
<Route path='/toggle' element={<Toggle />} /> 
<Route path='/input' element={<Input />} />        
<Route path='/modal' element={<Modal />} />        
<Route path='/localStorage' element={<LocalStorage />} />        
<Route path='/AutoCount' element={<AutoCount />} />        
<Route path='/Mode' element={<Mode />} />        
<Route path='/Drawer' element={<Drawer />} />        
<Route path='/Loader' element={<Loader />} />   
<Route path='/AutoCounter' element={<AutoCounter />} />   
<Route path='/Card' element={<Card />} />   
<Route path='/Json' element={<Json />} />   
<Route path='/NestedJson' element={<NestedJson />} />   
<Route path='/Accordian' element={<Accordian />} />
<Route path='/Fromik' element={<Fromik />} />         
<Route path='/Bdata' element={<Bdata />} />         
<Route path='/Register' element={<Register />} />         
<Route path='/Mail' element={<Mail />} />         
<Route path='*' element={<NoPages />} />

</Routes>      
<GoToTop />
</BrowserRouter>
    

</div>
)
}
export default App