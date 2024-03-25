import {Link} from "react-router-dom";
import { FaSearch, FaShoppingCart, FaSignInAlt,FaUser, FaSignOutAlt,FaHome } from "react-icons/fa";
import { useState } from "react";



const user = {_id: "random", roll: ""};
const Header = () => {

const [isOpen, setIsOpen]=useState <boolean>(false);
const logoutHandeler=()=>{
  setIsOpen(false);
}
  return (
    <nav className="Header">
        <Link to={"/"} onClick={()=>setIsOpen(false)}>
          <FaHome/>
        </Link>
        <Link to={"/search"} onClick={()=>setIsOpen(false)}>
            <FaSearch/>
        </Link>
        <Link to={"/cart"} onClick={()=>setIsOpen(false)}>
            <FaShoppingCart/>
        </Link>

        {
           user?. _id?(
            <>
            <button onClick={()=>setIsOpen((prev)=>!prev)}>
              <FaUser/>
            </button>
            <dialog open={isOpen}>
              {
                user.roll === "admin" && (
                  <Link to={"/admin/dashboard"}>Admin</Link>
                )
              }
              <Link onClick={()=>setIsOpen(true)} to="/orders">
              Orders
              </Link>
              <button onClick={logoutHandeler}>
              <FaSignOutAlt/>
              </button>
            </dialog>
            </>
           ): (
            <Link to={"/login"}>
            <FaSignInAlt/>
            </Link>
           )
        }
    </nav>
  )
}

export default Header