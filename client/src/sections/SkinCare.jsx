import ProductSection from '../components/ProductsSection';
import {skincare } from "../constants/index"

const SkinCare = () => {
  return (
     <ProductSection products={skincare} productsTitle='self-care'/>
  )
}

export default SkinCare