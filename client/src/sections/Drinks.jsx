import {drinks} from '../constants/index'
import ProductCard from '../components/ProductCard'

const Drinks = () => {
  return (
    <section id='drinks' className='pt-40'>
      <div className="border-b border-gray-200 flex flex-col justify-center items-center">
        <h2>Cold Drinks & Alcohol</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {drinks.map((product)=>(
            <ProductCard key={product.name}{...product}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Drinks