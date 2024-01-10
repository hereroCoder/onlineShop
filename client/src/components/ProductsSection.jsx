import ProductCard from '../components/ProductCard'

const ProductSection = (props) => {
  return (
    <section id={props.productsTitle} className='pt-40 w-4/5 m-auto box-border'>
      <div className="flex flex-col justify-center items-center">
        <h2 className='capitalize color-black'>{props.productsTitle}</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
          {props.products.map((product)=>(
            <ProductCard key={product.name}{...product}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductSection