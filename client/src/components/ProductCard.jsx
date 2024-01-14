import {useCart} from 'react-use-cart'

const ProductCard = (props) => {
  const {addItem,items} = useCart();
 

  const handleClick = ()=>{
    addItem(props)
    console.log(items)
  }

  return (
      <div className='flex flex-col justify-center items-center p-2 group border overflow-hidden relative border-box w-32 sm:w-52 bg-white'>
        <img src={props.imgURL} alt={props.name} className='w-20 aspect-auto' />
        <p className="leading-7  text-center capitalize">{props.name}</p>
        <p className="leading-7 ">{props.size}</p>
        <p className="leading-7  font-semibold mb-12">  £ {props.price.toFixed(2)}</p>
        <button className='bg-blue absolute bottom-2 py-2 px-10 rounded text-sm font-semibold text-white hover:bg-black' onClick={handleClick}> 
        ADD
        </button>
      </div>
      
   
  )
}

export default ProductCard