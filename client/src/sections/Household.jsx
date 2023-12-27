import ProductCard
 from "../components/ProductCard"

 import {cleaning} from '../constants/index'

const Household = () => {
  return (
    <section id='cleaning' className='pt-40'>
      <div className="border-b border-gray-200 flex flex-col justify-center items-center pb-10">
        <h2>Household</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cleaning.map((product)=>(
            <ProductCard key={product.name}{...product}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Household;