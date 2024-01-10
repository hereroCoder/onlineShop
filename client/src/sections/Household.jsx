
import ProductSection from '../components/ProductsSection';
 import {cleaning} from '../constants/index'

const Household = () => {
  return (
     <ProductSection products={cleaning} productsTitle='household'/>
  )
}

export default Household;