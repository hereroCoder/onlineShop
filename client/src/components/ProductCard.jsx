import {useCart} from 'react-use-cart'

const ProductCard = (props) => {
  const {addItem} = useCart();

  
  return (
      <div className='flex flex-col justify-center items-center p-2 group border overflow-hidden relative border-box w-52 bg-white'>
        <img src={props.imgURL} alt={props.name} className='w-20 aspect-auto' />
        <p className="leading-7 text-lg text-center capitalize">{props.name}</p>
        <p className="leading-7 text-lg">{props.size}</p>
        <p className="leading-7 text-lg font-semibold mb-12">  £ {props.price.toFixed(2)}</p>
        <button className=" bg-blue absolute bottom-2 py-2 px-10 rounded text-sm font-semibold text-white" onClick={()=>addItem(props)}> ADD</button>
      </div>
      
   
  )
}

export default ProductCard