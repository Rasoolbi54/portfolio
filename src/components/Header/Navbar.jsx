import React, { useState } from 'react';
import { Link } from 'react-scroll'; 
import './Header.css'; 
import { MoonIcon } from 'lucide-react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // Define the menuOpen state

  return (

  <div className="flex justify-between items-center md:px-20 px-4 py-4   border-b">
  <div className="text-3xl md:text-4xl">
    <span className=" font-bold">Rasoolbi Shaik.</span>
  </div>

  <div className="hidden sm:block">
    <ul className="flex gap-6 text-xl font-bold text-gray-300">
      <li className="hover:text-black cursor-pointer">Home.</li>
      <li className="hover:text-black cursor-pointer">About.</li>
      <li className="hover:text-black cursor-pointer">Projects.</li>
      <li className="hover:text-black cursor-pointer">Contact.</li>
    </ul>
  </div>

  <div>
    <MoonIcon />
  </div>
</div>



    
  );
}

export default Navbar;
