import React, { useDebugValue, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'


const Cart = ({ cart, increment, decrement, deleteitem }) => {
    // console.log("cart data", cart)
    const navigate=useNavigate()
    function handlecheckout()
    {
        navigate("/Checkout")
    }
   const totalprice=useMemo(()=>{
    return cart.reduce((sum,item)=>{
        return sum +item.productid.price * item.quantity
    },0)
   },[cart])
    return (
        <div className='w-[85%]  h-screen    mx-auto '>
            <h1 className='font-semi-bold text-3xl m-6'>Shopping Cart</h1>
            <div className="cardandtotalamount flex w-full  h-[60%] mb-4">
                <div className='cardcontainer w-[70%] flex flex-col gap-4  p-4  h-[84%] overflow-y-scroll overflow-x-hidden '>
                    {cart.map((cartitem) => {
                        if (!cartitem.productid || !cartitem.productid.imagePath) {
                            return null;
                        }
                        return (

                            <div className="cartitem w-full shadow-md p-3 flex justify-between" key={cartitem.productid._id}>
                                <div className="image  flex gap-6 text-xl ">
                                    <img src={`${import.meta.env.VITE_API_URL}${cartitem.productid.imagePath}`}
                                        alt="" className='productimage w-[35%] object-contain rounded-md' />
                                    <div className=' cartproductinfo flex flex-col gap-2 '>
                                        <h1 className='productname'>{cartitem.productid.name}</h1>
                                        <h1 className='text-green-400'>${cartitem.productid.price}</h1>
                                    </div>

                                </div>
                                <div className='flex justify-center items-center  gap-4 incremdecrembtn'>
                                    <div className='flex   rounded-tl-md rounded-bl-md  rounded-tr-md rounded-br-md'>
                                        <div className='border-l-2 border-t-2 border-b-2  border-gray-100 pl-2 pr-2  rounded-tl-md rounded-bl-md text-blue-400 text-xl '>
                                            <button className='p-1' onClick={() => { increment(cartitem.productid._id) }}>+</button>
                                        </div>
                                        <div className=' pl-8 pr-8  border-2 border-gray-100 flex justify-center items-center'>
                                            {cartitem.quantity}
                                        </div>
                                        <div className='border-r-2 border-t-2 border-b-2  pl-2 pr-2 border-gray-100 rounded-tr-md rounded-br-md text-blue-400 text-xl flex justify-center items-center'>
                                            <button className='pr-1' onClick={() => { decrement(cartitem.productid._id) }}>-</button>
                                        </div>
                                    </div>

                                    <button onClick={() => { deleteitem(cartitem.productid._id) }}>
                                        <button className="p-2 deletebutton bg-red-500 rounded-lg hover:bg-red-600 transition">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="w-5 h-5"
                                            >
                                                <path d="M3 6h18" />
                                                <path d="M8 6V4h8v2" />
                                                <path d="M19 6l-1 14H6L5 6" />
                                                <path d="M10 11v6" />
                                                <path d="M14 11v6" />
                                            </svg>
                                        </button>

                                    </button>
                                </div>

                            </div>
                        )

                    })}
                </div>
                <div className="second w-[30%]  flex justify-center  p-4">

                    <div className="totalseconddiv w-[80%] shadow-md h-[50%] text-2xl flex flex-col gap-9 p-4 border-2 border-gray-100">
                     <h1>Total Amount:</h1>
                      <h2 className='self-end text-green-400'>${totalprice}</h2>
                      <button className=' bg-blue-500   p-1 rounded-lg  secondcheckoutbtn   whitespace-nowrap text-white' onClick={()=>{handlecheckout()}}>Proceed To Checkout</button>
                    </div>

                </div>
            {/* cardcontainerclosed  */}
            </div>


            <div className="checkout h-[20%] flex shadow-md  w-full justify-between   border-2 border-gray-100 p-6">
                <div className="checkoutbox h-[80%] ">
                    <div className="continueshopping font-medium text-blue-500 text-xl flex h-full items-end ">
                        Continue Shopping
                    </div>
                </div>
                <div className="total text-2xl flex flex-col gap-7 self-end ">
                    <h1>Total Amount:${totalprice}</h1>
                    <button className='bg-blue-500  checkoutbottombtn p-2 rounded-xl'>Proceed to Checkout</button>
                </div>
            </div>



        </div>
    )
}

export default Cart
