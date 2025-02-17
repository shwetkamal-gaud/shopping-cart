import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import { useFetch } from './hooks/useFetch'
import Error from './components/Error'

function App() {
   const {  error } = useFetch('');
  return (
    <BrowserRouter>
      <Navbar />
      {error && <div className="absolute right-2 top-25"><Error err={error} /></div>}
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
