"use client"
import { useEffect } from "react";

export default function ProductDetail({ params }) {
  console.log(params)
  const loadProductDetails = async () => {
    const response = await fetch(`https://dummyjson.com/products/${params.id}`);
    const data = await response.json()
    console.log(data);

  }
  useEffect(() => {
    loadProductDetails()
  }, [])
  return (
    <div>
      content coming soon!
    </div>
  );
}
