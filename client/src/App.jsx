import Header from './components/Header'
import Footer from './components/Footer'
import Collection from './components/Collection'
import About from './components/About'
import Hero from './components/Hero'
import Newsletter from './components/Newsletter'
import { CartProvider } from 'react-use-cart'
import { useState } from 'react'
import ProductCard from './components/ProductCard'
import {data} from './constants/index'
import ProductSection from './components/ProductsSection'

const App = () => {
  const [category,setCategory] = useState('');

  const changeCategory = selectedCategory =>{
    setCategory(selectedCategory)
  }

  const filteredProducts = data.filter((product)=>
    product.category.toLowerCase().includes(category.toLowerCase())
  );

  return (
    <main className='bg-greenish'>
      <CartProvider>
        <Header changeCategory={changeCategory}/>
        <Hero/>
        <Collection/>
        <ProductSection products={filteredProducts} productsTitle={category}/>
        <About/>
        <Newsletter/>
        <Footer/>
      </CartProvider>
      
    </main>
  )
}

export default App