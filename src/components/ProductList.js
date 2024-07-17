import "./product.css";

export default function ProductList({products}) {

    const{name,  price, image} = products;
  return (
    <div className='product__card'>
        <img src={image} alt={name}/>
        <h5 className="flex-child">{name}</h5>
        <div className='product__actions'>
            <p>₹ {price}</p>
            <button onClick={()=>console.log("Triggred Add cart")}>Add to Cart</button>
        </div>
    </div>
  )
}
