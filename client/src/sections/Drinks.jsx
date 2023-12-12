import {drinks} from '../constants/index'
import ProductCard from '../components/ProductCard'

const Drinks = () => {
  return (
    <section id='drinks'>
      <div className="border-b border-gray-200 flex flex-col justify-center items-center pb-2">
        <h2>Cold Drinks & Alcohol</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {drinks.map((product)=>(
            <ProductCard key={product.name}{...product}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Drinks