import ProductCard from "../components/ProductCard"
import { foods } from "../constants/index"

const DryFoods = () => {
  return (
    <section id='foods'>
      <div className="border-b border-gray-200 flex flex-col justify-center items-center pb-2">
        <h2>Dry Foods</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {foods.map((product)=>(
            <ProductCard key={product.name}{...product}/>
          ))}
        </div>
      </div>
    </section>
    
    
  )
}

export default DryFoods