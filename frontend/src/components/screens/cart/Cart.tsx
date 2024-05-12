import { FC, useEffect, useState } from "react"
import { IProduct } from "../../../types/product.interface"
import { getProducts } from "../../../utils/getProducts";
import ProductCart from "../../ui/Cards/productCart/ProductCart";
import './Cart.scss'
import CartSidebar from "./cart-sidebar/CartSidebar";

const Cart: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Ошибка загрузки продуктов: ', error)
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="cart">
      {/* <div className="container"> */}
        {/* <div className="cart__grid">
          {products.map(product => (
            <ProductCart
              key={product.id}
              id={product.id}
              title={product.title}
              images={product.images}
            />
          ))}
        </div> */}
      {/* </div> */}
    </div>
  )
}

export default Cart
