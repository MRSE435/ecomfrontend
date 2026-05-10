import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar.jsx";
import Register from "./components/register.jsx"
import Login from "./components/login.jsx"
import Cart from "./components/cart.jsx"
import Protectedroute from './components/protectedroute.jsx';
import MyAwesomeCards from "./components/CardsComponent.jsx"; // You can rename it here!
import CheckoutForm from './components/CheckoutForm.jsx';
import Checkout from './components/Checkout.jsx';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { AppContextPipeline } from './Context/AppContext.jsx';
function App() {
  const [count, setCount] = useState(0)
  const AppContext=useContext(AppContextPipeline);
  const isloggedin=AppContext.isloggedin;
  const navigate=useNavigate()


if(isloggedin === null)
{
  return <div>Loading authoenticating ...</div>
}
  return (
    <>

    
        < Navbar className="flex" />
        <Routes>
          <Route path="/register" element={<Register className="border" />}></Route>
          <Route element={<Protectedroute isloggedin={isloggedin} />}>
            <Route path="/" element={< MyAwesomeCards className="border" />}></Route>
            <Route path="/cart" element={< Cart className="border" />}></Route>
            <Route path="/Checkout" element={<Checkout    />} />
            <Route path="/CheckoutForm" element={<CheckoutForm  />} />

          </Route>



          <Route path="/login" element={<Login />}></Route>


        </Routes>
      

    </>
  )
}

export default App
