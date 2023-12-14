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

  if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>

  return (
    <section className="py-4 container">
      <div className="flex justify-center">
        <div>
          <h5>Cart({totalUniqueItems}) total items:({totalItems})</h5>
          <table className="table-auto ">
           {items.map((item,index)=>{
            return(
               <tbody className=" border-gray-200 border">
                <tr key={index} >
                  <td>
                    <img src={item.imgURL} alt="" className="h-14" />
                  </td>
                  <td className="py-8 px-4">{item.name}</td>
                  <td className="py-8 px-4">{item.size}</td>
                  <td className="py-8 px-4">{item.price}</td>
                  <td className="py-8 px-4">
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
        <div>
          <h2 className="text-black font-bold">Total Price: {cartTotal}</h2>
          <button className="bg-green-200 p-4" onClick={()=>(
            {emptyCart}
          )} >Clear Cart</button>
        </div>

      </div>
    </section>
  )
}

export default Cart