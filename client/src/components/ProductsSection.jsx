import ProductCard from '../components/ProductCard'

const ProductSection = (props) => {
  return (
    <section className='py-10 w-4/5 m-auto box-border'>
      <div className="flex flex-col justify-center items-center">
        <h1 className='mb-5'>Products ({props.products.length})</h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 overflow-hidden">
          {props.products.map((product)=>(
            <ProductCard key={product.name}{...product}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductSection