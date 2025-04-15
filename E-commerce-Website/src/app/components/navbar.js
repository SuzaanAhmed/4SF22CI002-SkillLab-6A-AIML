import React from 'react'

export default function Navbar(){
  return (
    <div>
        <nav className="flex bg-yellow-100 h-[80px]">
    <img className="w-[90px] h-[90px]" src="image.png"/>
    <div className="flex items-center gap-2">
      <input className="w-[400px] bg-gray-200 border-2 shadow rounded"
        placeholder="Search for brands and more"
        type="text"
      />
      <button className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 m-1 rounded">Search</button>
    </div>
    <div className="flex">  
      <a href="/" className="hover:bg-yellow-200 m-4 px-3 pb-9 pt-3 rounded">Home</a>
      <a href="/support" className="hover:bg-yellow-200 m-4 px-3 pb-9 pt-3 rounded">Support</a>
      <a href="/login" className="hover:bg-yellow-200 m-4 px-3 pb-9 pt-3 rounded">Login</a>
    </div>
    </nav>
    </div>
  );
}
