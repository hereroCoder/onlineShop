
const ProductCard = ({imgURL, name, size, price}) => {
  return (
    <div className='flex flex-col justify-center items-center border p-2 rounded-2xl'>
      <img src={imgURL} alt={name} className='w-2/4'/>
      <p className="leading-6">{name}</p>
      <p className="leading-6">{size}</p>
      <p className="leading-6 font-semibold">{price}</p>
    </div>
  )
}

export default ProductCard