import { FC, useState } from "react";
import './ProductCard.scss';
import { Link } from "react-router-dom";
import Favorite from "../buttons/favorite/Favorite";
import { useFavoriteContext } from "../../../contexts/FavoriteContext";
import AddToCart from "../buttons/addToCart/AddToCart";
import { useCartContext } from "../../../contexts/CartContext";

interface IProductCardProps {
  id: number;
  title: string;
  images: string; 
  price?: number;
  colors?: string; 
}

const ProductCard: FC<IProductCardProps> = ({
   id,
  title,
  // images,
  price_new,
  price_old,
  images
  // colors 
}) => {
  // const [currentColor, setCurrentColor] = useState<string>(Object.keys(JSON.parse(images))[0]);
  const { addFavorite } = useFavoriteContext();
  const { addToCart } = useCartContext();
  const [counter, setCounter] = useState<number>(1);

  // const handleColorChange = (color: string) => {
  //   setCurrentColor(color);
  // };

  const handleAddToCart = () => {
    addToCart(id, counter
      // , currentColor
    );
  }

  // const parsedImages = JSON.parse(images);
  // const parsedColors = JSON.parse(colors);

  return (
    <article className="product-card">
      <img 
        src={images}
        alt=""
        // src={parsedImages[currentColor]} 
        // alt={`${title} (${parsedColors[currentColor]})`} 
        className="product-card__img" 
      />
      <Favorite onClick={() => addFavorite(id)}/>
      <div className="product-card__description description">
        <div className="description__properties properties">
          <h3 className="properties__title title-small">
            <Link to="#!" className="product-card__link">{title}</Link>
          </h3>
          <div className="properties__subtitle">Turn It Up Pants</div>
          <div className="properties__colors colors">

            {/* {Object.entries(parsedImages).map(([color, imageUrl]) => (
              <div key={color} className={`color color-${color}`} onClick={() => handleColorChange(color)}></div>
            ))} */}

          </div>
        </div>
        <div className="description__second-column">
          <div className="description__price title-small">${price_new}</div>
          <div className="description__price title-small">${price_old}</div>
          <AddToCart 
            onClick={handleAddToCart} 
            // color={currentColor}
          />
        </div>
      </div>
      {/* My merge commit */}
    </article>
  );
};

export default ProductCard;
