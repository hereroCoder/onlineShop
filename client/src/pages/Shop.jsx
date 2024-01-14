import ProductSection from '../components/ProductsSection';
import Header from '../components/Header';
import { CartProvider } from 'react-use-cart'
import { useState } from 'react'
import { data } from "../constants/index"
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
  //category
  const [category,setCategory] = useState('');
  //searched
  const [items, setItems] = useState('');

 const changeItems = searchedItems =>{
    setItems(searchedItems);
  }
  const changeCategory = selectedCategory =>{
    setCategory(selectedCategory)
  }

//filtered by category
  const filteredProducts = data.filter((product)=>
    product.category.toLowerCase().includes(category.toLowerCase())
  );

//filtered by search
  const filteredItems = filteredProducts.filter(product=>product.name.toLowerCase().includes(items.toLowerCase()) || product.category.toLowerCase().includes(items.toLowerCase()) )

  return (
    <div>
     <CartProvider>
      <Header changeItems={changeItems} changeCategory={changeCategory}/>
      <Link to="/onlineShop" className=" bg-blue top-1/2 py-2 px-6 rounded text-sm font-semibold text-white"><FontAwesomeIcon icon={faArrowLeft} className='mr-2' /> Home</Link>
      <ProductSection products={filteredItems}/>
      <Footer/>
      </CartProvider>
    </div>  
  )
}

export default Shop