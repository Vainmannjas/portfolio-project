import { FC } from "react"
import './CardCollection.scss'
import { Link } from "react-router-dom"

interface ICardCollection {
    img: string
    text: string
    alt?: string
    link: string

}

const CardCollection: FC<ICardCollection> = ({ img, text, alt, link }) => {
  return (
    <article className="card-collection">
        <img src={img} alt={alt} className="card-collection__img" />
        <Link to={link} className="card-collection__btn btn">{text}</Link>
    </article>
  )
}

export default CardCollection
