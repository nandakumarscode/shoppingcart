import React from 'react';
import { ProductList } from '../components';
import { useTitle } from '../hooks/useTitle';

export default function Home() {
    useTitle("Home");
    const products = [
        {"id":"0123", "name":"Acer Aspire Lite AMD Ryzen 5 5500U", "price":"36990","image":"/images/product1.jpg"},
        {"id":"0124", "name":"Lenovo IdeaPad Slim 1 Intel Core", "price":"26990","image":"/images/product2.jpg"},
        {"id":"0125", "name":"Redmi Note 13 5G ", "price":"36990","image":"/images/product3.jpg"},
        {"id":"0126", "name":"Apple iPhone 13 (256 GB) - Green", "price":"61450","image":"/images/product4.jpg"},
        {"id":"0127", "name":"Redmi 13C (Stardust Black, 6GB RAM, 128GB Storage)", "price":"8499","image":"/images/product5.jpg"},
        {"id":"0128", "name":"POCO C65 (Pastel Blue 6GB RAM 128GB Storage)", "price":"7990","image":"/images/product6.jpg"},
        {"id":"0129", "name":"Apple iPhone 15 (128 GB) - Pink", "price":"70990","image":"/images/product7.jpg"},
        {"id":"0130", "name":"OnePlus Nord CE4 Lite 5G", "price":"19990","image":"/images/product8.jpg"},
    ]
  return (
    <main>
        <section className='product__containter'>
            {products.map((product)=>(
                <ProductList key={product.id} products={product}/>
            ))}
            
        </section>
    </main>
  )
}
