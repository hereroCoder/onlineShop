import ProductCard from "../components/ProductCard"
import {skincare } from "../constants/index"

const SkinCare = () => {
  return (
    <section id='skincare' className="container">
      <div className="border-b border-gray-200 flex flex-col justify-center items-center pb-2 my-20">
        <h2>Skin Care</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skincare.map((product)=>(
            <ProductCard key={product.name}{...product}/>
          ))}
        </div>
      </div>
    </section>
    
    
  )
}

export default SkinCare