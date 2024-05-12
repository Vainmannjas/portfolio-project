import { HiOutlineShoppingCart } from "react-icons/hi2";
import './AddToCart.scss';
import { FC } from "react";

interface IAddToCartProps {
    onClick: ()
    //  (color: string)
    => void; 
    // color: string; 
}

const AddToCart: FC<IAddToCartProps> = (
//   {
//   onClick,
//   color
// }
) => {
  return (
    <button 
      // onClick={() => onClick(color)} 
      className="add-to-cart"
    > 
      <HiOutlineShoppingCart/>
    </button>
  );
};

export default AddToCart;
