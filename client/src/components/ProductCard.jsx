import {useCart} from 'react-use-cart'

const ProductCard = (props) => {
  const {addItem} = useCart();

  
  return (
      <div className='flex flex-col justify-center items-center border p-2 rounded-2xl group bg-white shadow overflow-hidden'>
        <img src={props.imgURL} alt={props.name} className='w-2/4'/>
        <p className="leading-7 text-xl">{props.name}</p>
        <p className="leading-7 text-xl">{props.size}</p>
        <p className="leading-7 text-xl font-semibold">  £ {props.price.toFixed(2)}</p>
        <button className="invisible bg-green-600 p-2 rounded text-sm font-semibold group-hover:visible duration-300 text-white" onClick={()=>addItem(props)}> ADD TO CART</button>
      </div>
      
   
  )
}

export default ProductCard