import { BsCartX } from "react-icons/bs";
import styles from './ErrorMessage.module.scss'

const ErrorMessage = () => {
  return (
    <div className={styles['error-message']}>
        <div className={styles['error-message__icon']}>
            <BsCartX/>
        </div>
        <div className={`${styles['error-message__text']} ${styles.text}`}>
            <div className={styles.text__title}>Your cart is empty.</div>
            <p>Before proceeding to checkout, you must add some products to your shopping cart.</p>
            <p>You will find a lot of interesting products on our "Shop" page.</p>
        </div>
    </div>
  )
}

export default ErrorMessage
