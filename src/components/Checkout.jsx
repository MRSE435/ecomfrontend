import React from 'react'


const Checkout = () => {
  return (
    
    <div className='w-screen h-screen m-auto p-6 m' >
      {/* main div  below*/}
       <div  className=" bg-amber-900 w-[full] h-[92%] flex mx-auto">
        {/* left div */}
          <div className="adressblockleft w-[65%] border-4 h-full">
            {/* adress child divs */}
            <div className='adress field p-6 h-[35%] ' >
              <textarea name="adress block" id="" className='w-full h-full border-2'>
                hello
              </textarea>
            </div>

             <div className='OrderDetails field p-6 h-[35%]' >
              <textarea name="adress block" id="" className='w-full h-full border-2'>
                hello
              </textarea>
            </div>

             <div className='OrderDetails field p-6 h-[30%]' >
              <textarea name="adress block" id="" className='w-full h-full border-2'>
                hello
              </textarea>
            </div>
            
          </div>     {/*left div close */}

        <div className='rightdiv w-[35%] h-full bg-blue-600 p-6'>
          <div className='checkoutbox w-[70%] h-[67%] border-2 ml-6'>
             <section className='border-2 p-2 flex flex-col gap-4'>
              <section className='w-full'>
                Order Sumamry
              </section>
              <section>
                Total items (5)
              </section>
             </section>


             <section>
              <section>
              Subtotal $5500

              </section>
              <section>
                GST(18%)
              </section>
              <section>
                Shipping:Free
              </section>
             </section>

             Grand Total:$2626
          </div>
        </div>
       </div>
    </div>
  )
}

export default Checkout
