import Header from './components/Header'
import Footer from './components/Footer'
import Household from './sections/Household'
import SkinCare from './sections/SkinCare'
import DryFoods from './sections/DryFoods'
import Snacks from './sections/Snacks'
import Drinks from './sections/Drinks'
import Cart from './components/Cart'
import { CartProvider } from 'react-use-cart'




//app for nostalgia
const App = () => {
  return (
    <main>
      <CartProvider>
        <Header/>
        <Cart/>
        <SkinCare/>
        <Snacks/>
        <Drinks/>
        <DryFoods/>
        <Household/>
        <Footer/>

      </CartProvider>
      
    </main>
  )
}

export default App