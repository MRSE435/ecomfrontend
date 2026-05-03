import React from 'react'
import Solbutton from './Solbutton'

const Checkout = ({cart})=> {
    const total=cart.reduce((sum,item)=>sum+item.productid.price,0);

  return (


    <div className='w-screen h-screen m-auto p-6 m' >
      {/* main div  below*/}
      <div className=" w-[full] h-[92%] flex mx-auto">
        {/* left div */}
        <div className="adressblockleft w-[65%] h-full">
          {/* adress child divs */}
          <div className='adress field p-6 h-[35%] ' >
              {/* first adress block */}
              <div name="adress block" id="" className='w-full h-full border-2'>

              </div>
          </div>

          <div className='OrderDetails field p-6 h-[35%]' >
            <div name="adress block" id="" className='w-full h-full border-2'>

            </div>
          </div>

          <div className='OrderDetails field p-6 h-[30%]' >
            <div  name="adress block" id="" className='w-full h-full border-2'>

            </div>
          </div>

        </div>     {/*left div close */}

        <div className='rightdiv w-[35%] h-full p-6'>
          <div className=' flex  '>
                 <div className='checkoutbox w-[70%] h-[67%] border-2 ml-6'>
            <section className='border-2 p-2 flex flex-col gap-4 border-b-2'>
              <section className='w-full '>
                Order Sumamry
              </section>
              <section>
                Total items (5)
              </section>
            </section>


            <section className='flex flex-col gap-3 p-6 text-2xl border-2 border-b-green-50'>
              <section>
                Subtotal ${total}

              </section>
              <section>
                GST(18%)
              </section>
              <section>
                Shipping:Free
              </section>
              <section>  
                Grand Total:$2626
            </section>
            </section>
            

            <div className='buttonsection flex flex-col'>
              <div className='border-2 border-b-2 mb-10 p-3 flex justify-center'>
               <button className='border p-2'>Pay Using RazorPay</button>

              </div>
              <div className='text-center flex justify-center items-center'>
               

              </div>
            <Solbutton  className='h-[30%]'/>
            </div>
            <div className='p-2 '>
               
           
            </div>
           
          </div>
          
          </div>
         
        </div>
      </div>
      
    </div>
  )
}

export default Checkout
