import ProductSection from '../components/ProductsSection';
import { snacks } from '../constants'

const Snacks = () => {
  return (
   <ProductSection products={snacks} productsTitle='snacks'/>
  )
}

export default Snacks