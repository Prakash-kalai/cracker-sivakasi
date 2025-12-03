import React from "react";

export default function Navbar({ current, onNav ,isSignedIn,signOut}) {
  const linkStyle =
    "relative cursor-pointer transition font-semibold hover:text-yellow-300";

  const activeStyle =
    "text-yellow-300 font-bold after:w-full";

  return (
    <nav className="bg-gradient-to-r from-red-600 to-black  text-white shadow-lg border-b border-red-700 h-15 flex justify-between p-5">
      <ul className="flex h-full gap-10 items-center  text-lg tracking-wide">

        
        <li
          onClick={() => onNav("home")}
          className={`${linkStyle} ${
            current === "home" ? activeStyle : ""
          }`}
        >
          <span>Home</span>
        </li>

        
        <li
          onClick={() => onNav("about")}
          className={`${linkStyle} ${
            current === "about" ? activeStyle : ""
          }`}
        >
          <span>About</span>
        </li>
        
        <li
          onClick={() => onNav("pricelist")}
          className={`${linkStyle} ${
            current === "pricelist" ? activeStyle : ""
          }`}
        >
          <span>Products</span>
        </li>

        
        <li
          onClick={() => onNav("contact")}
          className={`${linkStyle} ${
            current === "contact" ? activeStyle : ""
          }`}
        >
          <span>Contact</span>
        </li>

        
        <li>
          
        </li>
      </ul>
      <button
            
            className={` text-black font-bold rounded-2xl p-3 flex items-center justify-center ${!isSignedIn ? "cursor-pointer bg-red-400" : "cursor-not-allowed bg-gray-400"}  `}
            disabled={!isSignedIn}
            onClick={() => signOut()}
          >
            {isSignedIn ? "Log out" : "Login"}
          </button>
    </nav>
  );
}
