import { FC, useState } from "react"
import './ProductCart.scss'

interface IProductCart {
    id: number 
    title: string
    images: string

}

const ProductCart: FC<IProductCart> = ({title, images}) => {
    const [currentColor, setCurrentColor] = useState<string>(Object.keys(JSON.parse(images))[0]);
    const parsedImages = JSON.parse(images);
  return (
    <article className="product-cart">
      <h2 className="product-cart__title">{title}</h2>
      <img src={parsedImages[currentColor]} alt="" className="product-cart__img"/>
    </article>
  )
}

export default ProductCart
