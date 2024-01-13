import ProductSection from '../components/ProductsSection';
import {data } from "../constants/index"

const SkinCare = () => {
  return (
     <ProductSection products={data} productsTitle='self-care'/>
  )
}

export default SkinCare