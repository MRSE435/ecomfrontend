
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState ,createContext} from "react";
export const AppContextPipeline = createContext();
export const AppContextProvider = ({ children }) => {
    const [products, setproducts] = useState([])
    const [isloggedin, setisloggedin] = useState(null)
    const [user, setuser] = useState(null)
    const [cart, setcart] = useState([])
    const navigate = useNavigate()
    const cartChannel = new BroadcastChannel('cart');
    async function fetchcart() {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/fetchcart`, {
            credentials: "include"
        })
        const data = await res.json()
        setcart(data)
    }

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/checkauth`, { credentials: "include" })
            .then((res) => res.json())
            .then((data) => {
                setisloggedin(data.isloggedin);
                setuser(data.username)

            })
    }, [])


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




    async function incrementcart(productid) {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/handlecart`, {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ productid: productid })
        })

        if (res.ok) {
            await fetchcart()
            cartChannel.postMessage('update')
        }
        else {
            const err = await res.json()
            alert(err.message)
        }
    }


    async function decrementcart(productid) {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/decrementcart`, {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ productid: productid })
        })

        if (res.ok) {
            await fetchcart()
            cartChannel.postMessage('update')
        }
        else {
            const err = await res.json()
            alert(err.message)
        }
    }




    async function deleteitemfromcart(productid) {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/deleteitemfromcart`, {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ productid: productid })
        })

        if (res.ok) {
            await fetchcart()
            cartChannel.postMessage('update')
        }
        else {
            const err = await res.json()
            alert(err.message)
        }
    }


    async function addtocart(product) {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/handlecart`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ productid: product._id })
        })
        if (res.ok) {
            await fetchcart()
            cartChannel.postMessage('update')
        }
        else {
            const err = await res.json()
            alert(err.message)
        }
    }


    async function logout() {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/logout`, { method: "POST", credentials: "include" })
            if (res.status == 200) {
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
    }, [isloggedin]);

   return (
    <AppContextPipeline.Provider  value={{cart,isloggedin,fetchcart,incrementcart,decrementcart,deleteitemfromcart,logout,products,setisloggedin,setuser}}>
        {children}
    </AppContextPipeline.Provider>
   );

}