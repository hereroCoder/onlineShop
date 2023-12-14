import ProductCard from '../components/ProductCard'
import { snacks } from '../constants'

const Snacks = () => {
  return (
    <section id='snacks'>
      <div className="border-b border-gray-200 flex flex-col justify-center items-center pb-2 my-20">
        <h2>Snacks</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {snacks.map((product)=>(
            <ProductCard key={product.name}{...product}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Snacks