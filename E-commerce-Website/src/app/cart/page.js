"use client"
import React from "react";
import { useContext } from "react";
import { ecomContext } from "../contexts/ecomContext";
import ProductCard from "../components/productCard";

export default function Cart(){
    const {cart}=useContext(ecomContext)
    return(
        <div>
            {cart.map((product,index)=>{
                return <ProductCard
                    key={index}
                    image={product.image}
                    title={product.title}
                    desc={product.desc}
                />
            })}
        </div>
    );
}