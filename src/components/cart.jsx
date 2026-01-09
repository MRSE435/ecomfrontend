import React, { useDebugValue } from 'react'

const Cart = ({ cart, increment, decrement, deleteitem }) => {
    // console.log("cart data", cart)
    return (
        <div className='w-[85%]  h-screen     border mx-auto'>

            <div className="cardandtotalamount flex w-full border min-h-[77%]">
                <div className='cardcontainer w-[70%] flex flex-col gap-4  p-4 border overflow-scroll'>
                    {cart.map((cartitem) => {
                        if (!cartitem.productid || !cartitem.productid.imagePath) {
                            return null;
                        }
                        return (

                            <div className="cartitem w-full border  flex" key={cartitem.productid._id}>
                                <div className="image  flex ">
                                    <img src={`${import.meta.env.VITE_API_URL}${cartitem.productid.imagePath}`}
                                        alt="" className='w-[40%] ' />
                                    <div>
                                        <h1>{cartitem.productid.name}</h1>
                                        <h1>{cartitem.productid.price}</h1>
                                    </div>

                                </div>
                                <div className='flex justify-center items-center w-[30%]'>
                                    <p> Quantiyu   <button onClick={() => { increment(cartitem.productid._id) }}>+</button>{cartitem.quantity} <button onClick={() => { decrement(cartitem.productid._id) }}>-</button></p>
                                    <button onClick={() => { deleteitem(cartitem.productid._id) }}>Delete item</button>
                                </div>

                            </div>
                        )

                    })}
                </div>
                <div className="second w-[30%]">

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quasi animi consequatur itaque veritatis ducimus esse est culpa saepe, nostrum, reiciendis, iste ex. Cumque velit cupiditate, voluptatibus odio officia rem qui facere rerum quas labore, laborum at illum quisquam consequatur quasi minima delectus fugit aliquid similique est repellendus ea dolore blanditiis. Inventore ipsum in nemo nobis sint neque incidunt a, rerum culpa ad! Eos, illum! Fugiat delectus vero earum impedit? Perspiciatis, consequatur dolorum nemo voluptatem rem eaque corrupti! Provident ad maiores reprehenderit eos nulla, animi, quod deserunt accusamus aperiam adipisci libero vel beatae natus labore doloribus, eaque eveniet ullam at?

                </div>
            /* cardcontainerclosed */
            </div>


            <div className="checkout h-[20%] flex w-full  shadow justify-between  p-4">
                <div className="checkoutbox h-[80%] ">
                    <div className="continueshopping font-medium text-blue-500 text-xl flex h-full items-end ">
                        Continue Shopping
                    </div>
                </div>
                <div className="total text-2xl flex flex-col gap-4 self-end">
                    <h1>Total Amount:$9200</h1>
                    <button className='bg-blue-500 p-2 rounded-xl'>Proceed to Checkout</button>
                </div>
            </div>



        </div>
    )
}

export default Cart
