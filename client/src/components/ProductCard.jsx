import {useCart} from 'react-use-cart'

const ProductCard = (props) => {
  const {addItem} = useCart();

  
  return (
      <div className='flex flex-col justify-center items-center p-2 group border overflow-hidden gap-2 bg-white'>
        <img src={props.imgURL} alt={props.name} className='w-20 aspect-auto' />
        <p className="leading-7 text-md text-center capitalize">{props.name}</p>
        <p className="leading-7 text-xl">{props.size}</p>
        <p className="leading-7 text-xl font-semibold">  £ {props.price.toFixed(2)}</p>
        <button className=" bg-blue py-2 px-10 rounded text-sm font-semibold duration-300 text-white" onClick={()=>addItem(props)}> ADD</button>
      </div>
      
   
  )
}

export default ProductCard