import { useCart } from "react-use-cart"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

import { faTrashCan } from "@fortawesome/free-solid-svg-icons";



const Cart = ({openCart}) => {

  const handleClick=()=>{
    openCart(false)
  }

  const {items,
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,

  } = useCart();

  if (isEmpty){

    return (
      <div className="m-auto text-center">
          <h1 className="font-semibold mb-2">Your Cart is Empty</h1>
          <Link to="/onlineShop/Shop" className=" bg-blue py-2 px-6 rounded font-semibold text-white group-hover:cursor-pointer" onClick={handleClick}>Shop Now <FontAwesomeIcon icon={faArrowRight} /></Link>
      </div>
    ) 
  } 

  return (
    <section className="py-4 container font-lg w-5/6 sm:w-2/4 m-auto h-screen z-10">
      <div className="flex flex-col justify-center items-center pr-2">
        {/* items */}
        <div className="relative overflow-x-auto w-full">
          <table className="w-full text-left color-black">
           {items.map((item,index)=>{
            return(
               <tbody className=" border-gray-200 border">
                <tr key={index} >
                  <td>
                    <img src={item.imgURL} alt="" className="h-14" />
                  </td>
                  <td className="py-8 px-2">{item.name} ({item.size}) </td>
                  <td className="py-8 px-2 flex">
                    <button className="bg-transparent px-2 mr-2 border-blue rounded font-bold text-blue border-2 " onClick={()=>(updateItemQuantity(item.id,item.quantity-1))}>-</button>

                    {item.quantity}

                    <button className="bg-blue px-2 ml-2 rounded font-bold text-white hover:shadow-2xl shadow-black" onClick={()=>(updateItemQuantity(item.id, item.quantity+1))}>+</button>
                  </td>
                  <td className="py-8 px-2 "> £{item.price.toFixed(2)}</td>

                </tr>

              </tbody>
            

            )
           
          
           })} 

          </table>

        </div>
        <div className=" flex w-full justify-between px-4">
           <p>Total: </p>
           <p  className="font-semibold pr-4"> £ {cartTotal.toFixed(2)}</p>
        </div>
        {/* total, checkout, and clear */}

        <div className="flex items-center w-full justify-between gap-6 pt-4">
          <button className="border border-red-500 text-red-500 px-2 py-1 rounded hover:font-bold" onClick={()=>(
            emptyCart()
          )} >Empty Cart</button>

           <button className="px-4 py-2 hover:border-2 hover:border-blue hover:bg-transparent bg-orange rounded " onClick={()=>(
            alert('Sorry, checkout page not implemented yet.')
          )}>Checkout</button>
          
         

        </div>
        <Link to="/onlineShop/Shop" className=" bg-blue py-2 px-6 rounded font-semibold text-white group-hover:cursor-pointer" onClick={handleClick}>Back to Shopping <FontAwesomeIcon icon={faArrowRight} /></Link>
      </div>
    </section>
  )
}

export default Cart