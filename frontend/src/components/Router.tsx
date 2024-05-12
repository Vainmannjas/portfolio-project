import { FC } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./screens/home/Home"
import Layout from "./layout/Layout"
import Favorite from "./screens/favorite/Favorite"
import Cart from "./screens/cart/Cart"
import Blouses from "./screens/home/blouses/Blouses"
import Pants from "./screens/home/pants/Pants"
import Dresses from "./screens/home/dresses/Dresses"
import Outwear from "./screens/home/outwear/Outwear"
import { FavoriteProvider } from "../contexts/FavoriteContext"
import { CartProvider } from "../contexts/CartContext"
import NotFound from "./screens/notFound/NotFound"
import Search from "./screens/search/Search"
import SignIn from "./screens/signin/SignIn"
import Forgot from "./screens/forgot/Forgot"
import Product from "./screens/product/Product"
import Checkout from "./screens/checkout/Checkout"
import Coats from "./screens/coats/Coats"
import Jackets from "./screens/jackets/Jackets"
import Trousers from "./screens/trousers/Trousers"

const Router: FC = () => {
  return (
    <CartProvider>
    <FavoriteProvider>
      <BrowserRouter>
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="/favorite" element={<Favorite/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
              <Route path="/search" element={<Search/>}/>
              <Route path="/signin" element={<SignIn/>}/>
              <Route path="/forgot" element={<Forgot/>}/>
              <Route path="/product" element={<Product/>}/>
              <Route path="/coats" element={<Coats/>}/>
              <Route path="/jackets" element={<Jackets/>}/>
              <Route path="/trousers" element={<Trousers/>}/>
              <Route path="/blouses" element={<Blouses/>}/>
              <Route path="/pants" element={<Pants/>}/>
              <Route path="/dresses" element={<Dresses/>}/>
              <Route path="/outwear" element={<Outwear/>}/>
            </Route>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
    </FavoriteProvider>
    </CartProvider>
  )
}

export default Router
