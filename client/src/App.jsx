import Header from './components/Header'
import Footer from './components/Footer'
import Collection from './components/Collection'
import About from './components/About'
import Household from './sections/Household'
import SkinCare from './sections/SkinCare'
import DryFoods from './sections/DryFoods'
import Snacks from './sections/Snacks'
import Drinks from './sections/Drinks'
import Hero from './components/Hero'
import Newsletter from './components/Newsletter'
import { CartProvider } from 'react-use-cart'




//app for nostalgia
const App = () => {
  return (
    <main className='bg-greenish'>
      <CartProvider>
        <Header/>
        <Hero/>
        <Collection/>
        <About/>
        {/* <SkinCare/>
        <Snacks/>
        <Drinks/>
        <DryFoods/>
        <Household/> */}
        <Newsletter/>
        <Footer/>

      </CartProvider>
      
    </main>
  )
}

export default App