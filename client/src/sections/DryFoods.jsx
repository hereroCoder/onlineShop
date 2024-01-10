import ProductSection from '../components/ProductsSection';
import { foods } from "../constants/index"

const DryFoods = () => {
  return (
   <ProductSection products={foods} productsTitle='foods'/>
    
    
  )
}

export default DryFoods