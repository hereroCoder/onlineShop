import ProductCard
 from "../components/ProductCard"

 import {cleaning} from '../constants/index'

const Household = () => {
  return (
    <section id='cleaning'>
      <div className="border-b border-gray-200 flex flex-col justify-center items-center pb-2">
        <h2>Cleaning Products</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {cleaning.map((product)=>(
            <ProductCard key={product.name}{...product}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Household;