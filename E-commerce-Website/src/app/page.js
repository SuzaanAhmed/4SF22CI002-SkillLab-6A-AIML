"use client"
import { useState,useEffect } from "react";
import Image from "next/image";
import React from "react";
import Navbar from "./components/navbar";
import ProductCard from "./components/productCard";

export default function Home() {
  const [products,useProducts]=useState([])
  useEffect(() => {
    loadData()
  }, [])
  
  async function loadData() {
    await fetch('/api/products',{method:"GET"}).then((res)=>res.json()).then((data)=>{
      alert(JSON.stringify(data));
      useProducts(data)
    })
  }

  return (
    <div>
      <Navbar />
    <div className="flex flex-col m-4">
      <img
        src="header.png"
        className=""
      />
      <div className="flex flex-row">
        {
          products.map((product,index)=>{
            return <ProductCard
              image={product.image}
              title={product.title}
              desc={product.desc}
              key={index}
            />
          })
        }
      </div>
      </div>
    </div>
  );
}
