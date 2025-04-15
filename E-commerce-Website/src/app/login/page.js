"use client"
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login(){
    const router=useRouter()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    return(
        <div className="flex flex-col 
        min-h-screen
        w-full
        bg-blue-500
        items-center
        justify-center">
            <div className="flex flex-col 
            items-center
            bg-white
            w-[500px] h-[500px]
            shadow-lg rounded-lg">
                <img
                src="image.png"
                className="w-[150px] h-[150px]"
                />
            <input 
            onChange={(event)=>{
                setEmail(event.target.value)
            }}
            type="text" 
            placeholder="Login" 
            className="px-5 py-3 m-4 border-2 rounded"/>
            <br/>
            <input
            onChange={(event)=>{
                setPassword(event.target.value)
            }} 
            type="password"
            placeholder="Pas***d" 
            className="px-5 py-3 mt-4 border-2 rounded"/>
            <button className="mr-27 text-gray-300 border-radius hover:text-black-300">Forgot password?</button>

            <form onSubmit={(e)=>{
              
                e.preventDefault();
                if((email=="")&&(password=="")){alert("Email and password not found.")}
                else if(email==""){alert("Email not found")}
                else if(password==""){alert("Password not found")}
                else{
                alert("Email: "+email+"\nPassword: "+password)
                router.push('/') 
            }
            }}>

            <button type="submit" className="px-3 py-2 bg-blue-200 rounded hover:bg-blue-300 ">Submit</button> 

            </form>
            </div>
        </div>
    );
}