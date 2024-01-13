
import ProductSection from '../components/ProductsSection';
 import {data} from '../constants/index'

const Household = () => {
  return (
     <ProductSection products={data} productsTitle='household'/>
  )
}

export default Household;