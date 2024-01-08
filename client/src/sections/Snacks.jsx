import ProductCard from '../components/ProductCard'
import { snacks } from '../constants'

const Snacks = () => {
  return (
    <section id='snacks' className='pt-40' >
      <div className="border-b border-gray-200 flex flex-col justify-center items-center">
        <h2 >Snacks</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {snacks.map((product)=>(
            <ProductCard key={product.name}{...product}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Snacks