import ProductSection from '../components/ProductsSection';
import { data } from "../constants/index"

const DryFoods = () => {
  return (
   <ProductSection products={data} productsTitle='foods'/>
    
    
  )
}

export default DryFoods