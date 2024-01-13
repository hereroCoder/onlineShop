import ProductSection from '../components/ProductsSection';
import {data} from '../constants'

const Snacks = () => {
  return (
   <ProductSection products={data} productsTitle='snacks'/>
  )
}

export default Snacks