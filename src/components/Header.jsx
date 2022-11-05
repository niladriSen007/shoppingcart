import React from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingBag} from "react-icons/fi"
import { useSelector } from 'react-redux'
function Header() {
        const {cartItems} = useSelector(state=>state.cart)
        let sum=0;
        const totalItem = cartItems.forEach(item=>sum+=item.quantity);
  return (
    <nav>
        <h2>Logo</h2>
        <div>
            <Link to="/">Home</Link>
            <Link to="/cart">
                <FiShoppingBag />
                <p>{sum}</p>
            </Link>
        </div>
    </nav>
  )
}

export default Header
