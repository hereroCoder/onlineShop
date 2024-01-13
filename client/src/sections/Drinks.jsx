import {data} from '../constants/index';
import ProductSection from '../components/ProductsSection';

const Drinks = () => {
  return (
    <ProductSection products={data} productsTitle='drinks'/>
  )
}

export default Drinks