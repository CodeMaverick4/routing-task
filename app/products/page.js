"use client"
import { useEffect, useState } from "react";

export default function Product() {
    const [products,setProduct] = useState([]);

    const loadProducts = async ()=>{
        const response = await fetch('https://dummyjson.com/products');
        const data  = await response.json()
        console.log(data);

    }
    useEffect(()=>{
        loadProducts()
    },[])
    return (
        <main>
            <h1>Products Page</h1>
            <img src="images/photo.jpg" alt="" />
            <p>This is a simple placeholder for the products page.</p>
        </main>
    );
}
