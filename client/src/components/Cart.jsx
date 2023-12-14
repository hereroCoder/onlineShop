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
    <section className="py-4 container">
      <div className="flex flex-col justify-center items-center pr-2">
        {/* items */}
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700">
           {items.map((item,index)=>{
            return(
               <tbody className=" border-gray-200 border">
                <tr key={index} >
                  <td>
                    <img src={item.imgURL} alt="" className="h-14" />
                  </td>
                  <td className="py-8 px-2">{item.name}</td>
                  <td className="py-8 px-2">{item.size}</td>
                  <td className="py-8 px-2">{item.price}</td>
                  <td className="py-8 px-2 flex">
                    <button className="bg-gray-300 px-2 mr-2 rounded" onClick={()=>(updateItemQuantity(item.id,item.quantity-1))}>-</button>
                    {item.quantity}
                    <button className="bg-gray-300 px-2 ml-2 rounded" onClick={()=>(updateItemQuantity(item.id, item.quantity+1))}>+</button></td>
                  <td>
                    <button onClick={()=>(removeItem(item.id))}>
                      <FontAwesomeIcon icon={faTrashCan} className="mr-2 hover:text-red-500 hover:cursor-pointer"/>
                    </button>
                    
                    </td>
                </tr>

              </tbody>
            

            )
           
          
           })} 

          </table>
        </div>
        {/* total, checkout, and clear */}
        <div className="flex items-center gap-6">
          <h2>Total: <span  className="font-semibold"> £ {cartTotal}</span></h2>

           <button className="p-2 bg-green-200 rounded hover:font-bold" onClick={()=>(
            alert('Sorry, checkout page not implemented yet.')
          )}>Checkout</button>
         

          <button className="bg-red-200 p-2 rounded hover:font-bold" onClick={()=>(
            emptyCart()
          )} >Clear Cart</button>
          
         

        </div>
      </div>
    </section>
  )
}

export default Cart


// todo: 1. add scroll to see all items
// 2. format money
