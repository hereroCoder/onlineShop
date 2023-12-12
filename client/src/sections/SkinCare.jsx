import { skincare } from "../constants"
import ProductCard from "../components/ProductCard"

const SkinCare = () => {
  return (
    <section id='skincare'>
      <div className="border-b border-gray-200 flex flex-col justify-center items-center pb-2">
        <h2>Skin Care</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {skincare.map((product)=>(
            <ProductCard key={product.name}{...product}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkinCare