import ProductCard from "../components/ProductCard"
import { foods } from "../constants/index"

const DryFoods = () => {
  return (
    <section id='foods' className='pt-40'>
      <div className="border-b border-gray-200 flex flex-col justify-center items-center">
        <h2>Dry Foods</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {foods.map((product)=>(
            <ProductCard key={product.name}{...product}/>
          ))}
        </div>
      </div>
    </section>
    
    
  )
}

export default DryFoods