import {createReducer} from "@reduxjs/toolkit"

export const cartReducer = createReducer({
    cartItems:[],
    subTotal:0,
    shipping:0,
    tax:0,
    total:0
},{
    addToCart:(state,action)=>{
        const item = action.payload;
        // console.log(item.id)
        const isItemExists = state.cartItems.find(eachItem=>eachItem.id === item.id)
        if(isItemExists)
        {
            // isItemExists.quantity+=1
            // or
            state.cartItems.forEach(elem=>{
                if(elem.id === item.id) elem.quantity+=1;
            })
        }
        else
        {
            state.cartItems.push(item)
            console.log(state.cartItems)
        }
    },
    decrementFromCart : (state,action)=>{
        
        const item = state.cartItems.find(eachItem=>eachItem.id === action.payload)
        if(item.quantity > 1)
        {
            // item.quantity-=1
            // or
            state.cartItems.forEach(elem=>{
                if(elem.id ===action.payload) elem.quantity-=1;
            })
        }
        
    },
    deleteFromCart : (state,action)=>{  
       state.cartItems = state.cartItems.filter(item=>item.id !== action.payload)
        
    },
    calculateTotalSum:(state)=>{
        let sum=0;
        state.cartItems.forEach(eachItem=>sum+=(eachItem.price * eachItem.quantity))
        state.subTotal = sum;
        state.shipping= state.subTotal > 15000 ? 0 : 200;
        state.tax =+( state.subTotal * 0.18).toFixed();
        state.total = state.subTotal+state.tax+state.shipping;
    }


})