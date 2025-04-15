"use client"
import { useContext } from "react";
import { ecomContext } from "../contexts/ecomContext";
import { useRouter } from "next/navigation";
  export default function ProductCard({id,title,desc,image}){
    const router=useRouter()
    const {cart,addProductToCart, removeProductFromCart} = useContext(ecomContext);
    return(
      <div className="w-[200px] h-[330px] shadow-[1000] rounded m-2 justify-items-center text-center border p-1">
        <img className="h-[150px] p-8" src={image}/>
        <p className="font-[800]">{title}</p>
        <p className="italic ">{desc}</p>
        <div className=" h-[30px] flex justify-between mt-auto">
        <button 
        onClick={(event)=>{
          addProductToCart({
            id:id,
            title:title,
            desc:desc,
            image:image
          })
          router.push("/cart")
        }}
        className="bg-blue-400 hover:bg-blue-600 text-white border rounded small px-1">Add to Cart</button>
        <button 
          onClick={(event)=>{
            addProductToCart({
              id:id,
              title:title,
              desc:desc,
              image:image
            })
            router.push("/favourites")
          }}
        className="h-[10px] p-0 rounded m-2 ml-10 mt-100%">
          <img className="hover:bg-red-500" src="heart.png" />
        </button>
      </div>
      </div>  
    );
}