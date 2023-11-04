import logo from './logo.svg';
import './App.css';
import Portfolio from './Component/Portfolio/Portfolio';
import About from './Component/About/About';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Notfound from './Component/Notfound/Notfound';
import Layout from './Component/Layout/Layout';
import {createHashRouter} from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import  Contact  from './Component/Contact/Contact';
let routers=createHashRouter([
  {path:'/' , element:<Layout/> , children :[
   
    {index:true,element:<About/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'contact',element:<Contact/>},
    {path:'*',element:<Notfound/>},

  ]}
])


function App() {

  return <><RouterProvider router={routers}></RouterProvider>
  
  </>
  
  
  
    
  
}

export default App;
