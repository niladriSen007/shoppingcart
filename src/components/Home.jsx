import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const img1 =
"https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
"https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";

function Home() {

    const dispatch = useDispatch()

    const productList = [
        {
          name: "Mac Book",
          price: 12000,
          imgSrc: img1,
          id: "asdhajsdbhjabhsjdfdfv",
        },
        {
          name: "Black Shoes",
          price: 490,
          imgSrc: img2,
          id: "sdjfdlaajsdbhjabhsjdfdfv",
        },
      ];

      const addToCart = (options) =>{
        // console.log(options.id)
            dispatch({type:"addToCart",payload:options})
            dispatch({
                type:"calculateTotalSum",
            })
            toast.success("Added to cart")
      }

  return (
    <div className='home'>
       {
        productList.map(product=>{
            const {id,name,imgSrc,price} = product;
           return(
            <ProductCard key={id} name={name} imgSrc={imgSrc} price={price} handler={addToCart} id={id}/>
           )
            })
       }
    </div>
  )
}

const ProductCard = ({id,name,imgSrc,price,handler}) =>(
    <div className="productCard">
            <img src={imgSrc} alt={name} />
            <p>{name}</p>
            <h4>${price}</h4>
            <button key={id} onClick={()=>handler({name,imgSrc,price,quantity:1,id})}>Add To Cart</button>
    </div>
)

export default Home