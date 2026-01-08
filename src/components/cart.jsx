import React from 'react'

const Cart = ({ cart, increment, decrement ,deleteitem}) => {
    // console.log("cart data", cart)
    return (
        <div>
            1
            {cart.map((cartitem) => {
                if (!cartitem.productid || !cartitem.productid.imagePath) {
                    return null;
                }

                return (
                    <div className="cartitem " key={cartitem.productid._id}>
                        <div className="image  ">
                            <img src={`http://localhost:3000${cartitem.productid.imagePath}`}
                                alt="" className='w-full'/>
                            <h1>{cartitem.productid.name}</h1>
                            <p> Quantiyu   <button onClick={() => { increment(cartitem.productid._id) }}>+</button>{cartitem.quantity} <button onClick={() => { decrement(cartitem.productid._id) }}>-</button></p>
                        </div>
                      <button onClick={() => { deleteitem(cartitem.productid._id) }}>Delete item</button>
                    </div>
                )

            })}
        </div>
    )
}

export default Cart
