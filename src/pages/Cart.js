import { CardView } from '../components';
import { useTitle } from "../hooks/useTitle";

export default function Cart() {
  useTitle("Cart")
  const products = [
    {"id":"0123", "name":"Acer Aspire Lite AMD Ryzen 5 5500U", "price":"36990","image":"/images/product1.jpg"},
    {"id":"0124", "name":"Lenovo IdeaPad Slim 1 Intel Core", "price":"26990","image":"/images/product2.jpg"},
]
  return (
    <section>
      <h1>Cart Items {products.length}</h1>
      {products.map((product)=>(
        <CardView key={product.id} product={product}/>
      ))}
    </section>
  )
}
