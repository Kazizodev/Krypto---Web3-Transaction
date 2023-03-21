import { useState } from 'react';

//Icons
import { HiMenuAlt3 as MenuIcon } from "react-icons/hi";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";

//Logo
import logo from '../../images/logo.png';

//Nav Links
const Links = ["Market", "Exchange", "Tutorials", "Wallets"];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between p-4">

      <div className="md:flex-[0.5] flex-initial justify-center items-center flex-row">
        <img src={logo} alt="logo" className="w-10 cursor-pointer" />
      </div>

      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {Links.map((item, index) => {
          return (
            <li key={item + index} className={`mx-4 cursor-pointer hover:underline hover:underline-offset-2`}>
              {item}
            </li>
          );
        })}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] duration-200">Marketplace</li>
      </ul>

      <div className="flex items-center relative">
        {toggleMenu
          ? <CloseIcon fontSize={38} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
          : <MenuIcon fontSize={38} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md nav-background text-white animate-slide-in">
            <li className='text-xl w-full my-2'>
              <CloseIcon onClick={() => setToggleMenu(false)} />
            </li>
            {Links.map((item, index) => {
              return (
                <li key={item + index} className={`mx-4 cursor-pointer hover:underline hover:underline-offset-2 my-2 text-lg`}>
                  {item}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      
    </nav>
  );
}

export default Navbar;