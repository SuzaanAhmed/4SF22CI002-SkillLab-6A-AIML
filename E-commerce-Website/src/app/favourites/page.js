"use client"
import React from "react"
import { useContext } from "react"
import { ecomContext } from "../contexts/ecomContext";
import ProductCard from "../components/productCard";

export default function FavouritesPage(){
    const { favourites } = useContext(ecomContext)
    return(
        <div>   
            {favourites.map((product,index)=>{
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