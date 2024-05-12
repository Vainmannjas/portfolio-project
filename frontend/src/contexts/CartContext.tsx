import { ReactNode, createContext, useContext, useState } from "react"

type TypeCart = {
  id: number
  quantity: number
}

interface ICartContext {
  cart: TypeCart[];
  addToCart: (id: number, quantity: number) => void
}

export const CartContext = createContext<ICartContext>({} as ICartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<TypeCart[]>([]);

  const addToCart = (id: number, quantity: number) => {
    setCart(prevCart => [...prevCart, { id, quantity }])
  }

  const isCartEmpty = cart.length === 0;

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      { children }
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext);

