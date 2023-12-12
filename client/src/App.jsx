import Header from './components/Header'
import Footer from './components/Footer'
import Household from './sections/Household'
import SkinCare from './sections/SkinCare'
import DryFoods from './sections/DryFoods'
import Snacks from './sections/Snacks'
import Drinks from './sections/Drinks'




//app for nostalgia
const App = () => {
  return (
    <main>
      <Header/>

      <section>
        <SkinCare/>
      </section>

      <section>
        <Drinks/>
      </section>

      <section>
        <Snacks/>
      </section>

      <section>
        <DryFoods/>
      </section>

      <section>
        <Household/>
      </section>

      <Footer/>
    </main>
  )
}

export default App