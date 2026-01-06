const CardGrid = ({ items=[], className,onadd }) => {
    console.log("Items received by CardGrid:", items); // Check your browser console!
    return (
        <div className="card-container">
            {

                items.map((product) => {
                    return (
                        <div className="card" key={product._id}>
                            <img src={`http://localhost:3000${product.imagePath}`} alt="" />
                            <h1>{product.name}</h1>
                            <h1>{product.price}</h1>
                            <button   onClick={()=>{onadd(product)}}>Add To Cart</button>
                        </div>
                    )


                })
            }

        </div>
    );
};

export default CardGrid;
