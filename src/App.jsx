import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar.jsx";
import Register from "./components/register.jsx"
import Login from "./components/login.jsx"
import Cart from "./components/cart.jsx"
import Protectedroute from './components/protectedroute.jsx';
import MyAwesomeCards from "./components/CardsComponent.jsx"; // You can rename it here!
import Checkout from './components/Checkout.jsx';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
const cartChannel=new BroadcastChannel('cart_sync')
function App() {
  const [count, setCount] = useState(0)
  const [products, setproducts] = useState([])
  const [cart, setcart] = useState([])
  const [isloggedin,setisloggedin]=useState(null)
  const [user,setuser]=useState(null)
  const [isloggedout,setisloggedout]=useState(null)
  const navigate=useNavigate()

async function fetchcart()
{
  const res=await fetch(`${import.meta.env.VITE_API_URL}/api/fetchcart`,{
    credentials:"include"
  })
  const data=await res.json()
  setcart(data)
}


// 
async function incrementcart(productid){
  const res=await fetch(`${import.meta.env.VITE_API_URL}/api/handlecart`,{
    method:"POST",
    credentials:"include",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({productid:productid})
  })

  if(res.ok)
   {
   await fetchcart()
   cartChannel.postMessage('update')
   }
   else
   {
    const err=await res.json()
    alert(err.message)
   }
}

async function decrementcart(productid)
{
   const res=await fetch(`${import.meta.env.VITE_API_URL}/api/decrementcart`,{
    method:"POST",
    credentials:"include",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({productid:productid})
  })

  if(res.ok)
   {
   await fetchcart()
   cartChannel.postMessage('update')
   }
   else
   {
    const err=await res.json()
    alert(err.message)
   }
}


async function getrprice(productid)
{
  console.log(products[productid].price)
}









async function deleteitemfromcart(productid)
{
const res=await fetch(`${import.meta.env.VITE_API_URL}/api/deleteitemfromcart`,{
    method:"POST",
    credentials:"include",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({productid:productid})
  })

  if(res.ok)
   {
   await fetchcart()
   cartChannel.postMessage('update')
   }
   else
   {
    const err=await res.json()
    alert(err.message)
   }
}


  async function addtocart(product) {
   const res=await fetch(`${import.meta.env.VITE_API_URL}/api/handlecart`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    credentials:"include",
    body:JSON.stringify({productid:product._id})
   })
   if(res.ok)
   {
   await fetchcart()
   cartChannel.postMessage('update')
   }
   else
   {
    const err=await res.json()
    alert(err.message)
   }
  }

useEffect(()=>{
  fetch(`${import.meta.env.VITE_API_URL}/api/checkauth`,{credentials:"include"})
  .then((res)=>res.json())
  .then((data)=>{setisloggedin(data.isloggedin);
    setuser(data.username)

  })
},[])


 



// useeffect for cartisloggedin
useEffect(() => {
  if (isloggedin) {
    fetchcart();

    // 1. Define the function
    const handleMessage = () => {
      console.log("Syncing cart across tabs...");
      fetchcart();
    };

    // 2. Add the listener
    cartChannel.addEventListener('message', handleMessage);

    // 3. CLEANUP: This removes the listener when the component unmounts
    // or when isloggedin changes.
    return () => {
      cartChannel.removeEventListener('message', handleMessage);
    };
  }
}, [isloggedin]);












async function logout() {
  try {
  const res=await fetch(`${import.meta.env.VITE_API_URL}/api/logout`,{method:"POST",credentials:"include"})
  if(res.status==200)
  {
    setisloggedin(false)
    setuser(null)
    navigate("/login")
  }
  } catch (error) {
    console.log(error)
  }
}




  useEffect(() => {
  // 1. Only run this fetch if isloggedin is explicitly true
  if (isloggedin === true) {
    fetch(`${import.meta.env.VITE_API_URL}/api/products`, { credentials: "include" })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => { setproducts(data) })
      .catch((err) => { console.log("Product fetch error:", err) });
  }
}, [isloggedin]); // 2. Add isloggedin to the dependency array



if(isloggedin === null)
{
  return <div>Loading authoenticating ...</div>
}
  return (
    <>

    
        < Navbar className="flex" isloggedin={isloggedin} logout={logout} />
        <Routes>
          <Route path="/register" element={<Register className="border" />}></Route>
          <Route element={<Protectedroute isloggedin={isloggedin} />}>
            <Route path="/" element={< MyAwesomeCards items={products} onadd={addtocart} className="border" />}></Route>
            <Route path="/cart" element={< Cart cart={cart}  increment={incrementcart} decrement={decrementcart}  deleteitem={deleteitemfromcart}    getprice={getrprice} className="border" />}></Route>
            <Route path="/Checkout" element={<Checkout />} />
          </Route>



          <Route path="/login" element={<Login  setisloggedin={setisloggedin} setuser={setuser}/>}></Route>


        </Routes>
      

    </>
  )
}

export default App
