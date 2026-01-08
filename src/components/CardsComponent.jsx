const CardGrid = ({ items = [], className, onadd }) => {
    console.log("Items received by CardGrid:", items); // Check your browser console!
    return (
        <div className="card-container">
            {

                items.map((product) => {
                    return (
                        <div className="card  rounded-xl" key={product._id}>
                            
                              <img
                                src={`${import.meta.env.VITE_API_URL}${product.imagePath}`}
                                alt={product.name}
                                className="w-full h-[70%] rounded-tl-xl rounded-tr-xl mb-2"
                            />
                           
                            
                            <div className="productinfo flex  flex-col p-5 gap-2">
                                <div className="self-start">
                                    <h1 className="text-2xl">{product.name}</h1>
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="text-green-400 text-2xl">${product.price}</h1>
                                    <button className="bg-[#1f2933] p-1 text-white  px-2 rounded-xs text-xl" onClick={() => { onadd(product) }}>Add To Cart</button>
                                </div>

                            </div>

                        </div>
                    )


                })
            }

        </div>
    );
};

export default CardGrid;
