import ProductCard from "../components/ProductCard"
import {skincare } from "../constants/index"

const SkinCare = () => {
  return (
    <section id='skincare' className='pt-40 w-full'>
      <div className="flex flex-col justify-center items-center">
        <h2>Skin Care</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skincare.map((product)=>(
            <ProductCard key={product.name}{...product}/>
          ))}
        </div>
      </div>
    </section>
    
    
  )
}

export default SkinCare