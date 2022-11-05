import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';

const img1 =
"https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";

function Cart() {


    //accessing the cart fields from store
    const {cartItems,subTotal,shipping,tax,total} = useSelector(state=>state.cart)

    const dispatch = useDispatch()

    const decrementHandler = (id) =>{
        dispatch({
            type:"decrementFromCart",
            payload:id,
        })
        
        dispatch({
            type:"calculateTotalSum",
        })
    }
    const incrementHandler = (id) =>{
        dispatch({
            type:"addToCart",
            payload:{id}
        })
        dispatch({
            type:"calculateTotalSum",
        })
    }
    const deleteHandler = (id) =>{
        dispatch({
            type:"deleteFromCart",
            payload:id,
        })
        dispatch({
            type:"calculateTotalSum",
        })
    }



  return (
    <div className='cart'>
        <main>
            {
                cartItems.length > 0 ? 
                
                    cartItems.map(eachCartItem=>(
                        <CartItem
                         imgSrc={eachCartItem.imgSrc} 
                         name={eachCartItem.name} 
                         price={eachCartItem.price} 
                         quantity={eachCartItem.quantity} 
                         id={eachCartItem.id} 
                         key={eachCartItem.id}
                         decrementHandler={decrementHandler}
                         incrementHandler={incrementHandler}
                         deleteHandler={deleteHandler}
                         />
                    ))
                
                : ( <h1>No Items Yet</h1>) 
            }
            
        </main>
        <aside>
            <h2>Subtotal: ${subTotal}</h2>
            <h2>Shipping: ${shipping}</h2>
            <h2>Tax: ${tax}</h2>
            <h2>Total: ${total}</h2>
        </aside>
    </div>
  )
}

const CartItem = ({imgSrc,name,price,quantity,decrementHandler,incrementHandler,deleteHandler,id}) =>(
    <div className="cartItem">
        <img src={imgSrc} alt="Item" />
        <article>
            <h3>{name}</h3>
            <p>${price}</p>
        </article>
        <div>
            <button onClick={()=>decrementHandler(id)}> - </button>
            <p>{quantity}</p>
            <button onClick={()=>incrementHandler(id)}> + </button>
            <AiFillDelete  onClick={()=>deleteHandler(id)}/>
        </div>
    </div>
)

export default Cart