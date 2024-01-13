import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/shop'


const App = () => {

  return (
    <main className='bg-greenish'>
      <Routes>
        <Route path="onlineShop/" element={<Home />} />
        <Route path="onlineShop/Shop" element={<Shop />}/>
      </Routes>

      
    </main>
  )
}

export default App