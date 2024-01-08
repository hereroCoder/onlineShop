import { useCart } from "react-use-cart"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const {items,
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,

  } = useCart();

  if (isEmpty) return <h1 className="text-center font-semibold">Your Cart is Empty</h1>

  return (
    <section className="py-4 container font-lg">
      <div className="flex flex-col justify-center items-center pr-2">
        {/* items */}
        <div className="relative overflow-x-auto">
          <table className="w-full text-left text-gray-700">
           {items.map((item,index)=>{
            return(
               <tbody className=" border-gray-200 border">
                <tr key={index} >
                  <td>
                    <img src={item.imgURL} alt="" className="h-14" />
                  </td>
                  <td className="py-8 px-2">{item.name} ({item.size}) </td>
                  <td className="py-8 px-2 flex">
                    <button className="bg-red-500 px-2 mr-2 rounded font-bold text-white" onClick={()=>(updateItemQuantity(item.id,item.quantity-1))}>-</button>
                    {item.quantity}
                    <button className="bg-green-500 px-2 ml-2 rounded font-bold text-white" onClick={()=>(updateItemQuantity(item.id, item.quantity+1))}>+</button>
                  </td>
                   <td className="py-8 px-2 font-semibold"> £{item.price.toFixed(2)}</td>

                  {/* delete button per item */}
                  {/* <td>
                    <button onClick={()=>(removeItem(item.id))}>
                      <FontAwesomeIcon icon={faTrashCan} className="mr-2 hover:text-red-500 hover:cursor-pointer"/>
                    </button>
                    
                    </td> */}
                </tr>

              </tbody>
            

            )
           
          
           })} 

          </table>
        </div>
        {/* total, checkout, and clear */}

        <div className="flex items-center gap-6 pt-2">
          <button className="border font-semibold border-red-500 text-red-500 px-2 py-1 rounded hover:font-bold" onClick={()=>(
            emptyCart()
          )} >Empty Cart</button>

           <button className="px-2 py-1 bg-green-200 rounded hover:font-bold" onClick={()=>(
            alert('Sorry, checkout page not implemented yet.')
          )}>Checkout</button>
         

          <p>Total: <span  className="font-semibold"> £ {cartTotal.toFixed(2)}</span></p>
          
         

        </div>
      </div>
    </section>
  )
}

export default Cart