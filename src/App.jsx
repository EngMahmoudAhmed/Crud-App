// import Home from "./components/pages/Home"
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import './App.css'
import { Route, Routes } from "react-router-dom"
import Products from "./pages/Products/Products"
import AddProduct from "./pages/addproduct/AddProduct"
import ProductDetails from "./pages/productDetails/ProductDetails"

function App() {

  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path='/products' element={<Products />} />
            <Route path="/Addproduct" element={<AddProduct />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
