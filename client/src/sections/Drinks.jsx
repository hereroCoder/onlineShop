import {drinks} from '../constants/index';
import ProductSection from '../components/ProductsSection';

const Drinks = () => {
  return (
    <ProductSection products={drinks} productsTitle='drinks'/>
  )
}

export default Drinks