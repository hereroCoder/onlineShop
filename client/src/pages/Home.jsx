
import Header from '../components/Header'
import Footer from '../components/Footer'
import Collection from '../components/Collection'
import About from '../components/About'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import { CartProvider } from 'react-use-cart'
import { useState } from 'react'
import {data} from '../constants/index'
 import { useNavigate } from "react-router-dom";


const Home = () => {
 
  const navigate = useNavigate()

  const [category,setCategory] = useState('');
  const [items, setItems] = useState('');

 const changeItems = searchedItems =>{
    setItems(searchedItems);
  }
  const changeCategory = selectedCategory =>{
    setCategory(selectedCategory)
  };

  



  const filteredItems = data.filter((product)=>product.name.toLowerCase().includes(items.toLowerCase()||product.category.toLowerCase().includes(items.toLowerCase())
  ));

  const filteredProducts = data.filter((product)=>
    product.category.toLowerCase().includes(category.toLowerCase())
  );

  return (
    <main className='bg-greenish'>
      <CartProvider>
        <Header changeItems={changeItems} changeCategory={changeCategory}/>
        <Hero/>
        <Collection/>
        <About/>
        <Newsletter/>
        <Footer/>
      </CartProvider>
      {
        navigate('/onlineShop/Shop') 
      }
       
    
    </main>
  )
}

export default Home