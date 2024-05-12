import { Link } from 'react-router-dom';
import Close from '../../../ui/buttons/close/Close';
import styles from './CartSidebar.module.scss';
import { FC, useEffect, useState } from 'react';
import Button from '../../../ui/buttons/Button';
import { IProduct } from '../../../../types/product.interface';
import { useCartContext } from '../../../../contexts/CartContext';
import { getProducts } from '../../../../utils/getProducts';
import SidebarCard from '../../../ui/Cards/sidebarCard/SidebarCard';
import ErrorMessage from '../../../ui/error-message/ErrorMessage';

interface ICartSidebar {
    onEdit: () => void
    onClose: () => void
    // className: string
}

const CartSidebar: FC<ICartSidebar> = ({onEdit, onClose
    // , className
}) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const { cart } = useCartContext();
    const [currentColor, setCurrentColor] = useState<string>('');
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch(error) {
                console.error('Ошибка загрузки продуктов: ', error)
            }  
        }
        fetchProducts();
    }, []);

    const cartProducts = products.filter(product => cart.some(item => item.id === product.id));
    
    // const parsedImages = cartProducts.map(product => JSON.parse(product.images));
    // const parsedColors = cartProducts.map(product => JSON.parse(product.colors));
    // console.log(parsedImages)
    
    return (
        <>
            <div className={styles['unclickable-bg']}>
                </div>
                <div
                    className={`${styles['cart-sidebar']}
                    
                     `
                    } 
                     >
                    <header className={`${styles['cart-sidebar__header']} ${styles.header}`}>
                        <div className={`${styles['header__header']} ${styles['header-header']}`}>
                            <h2 className={styles.header__title}>Your Cart</h2>
                            <div onClick={onClose} className={styles.close}>
                                <Close />
                            </div>
                        </div>
                        <h3 className={styles.header__subheader}>25% OFF</h3>
                        <h4 className={styles["header-sub-subheader"]}>25% OFF EVERYTHING!*</h4>
                    </header>

                    {cartProducts.length === 0 ? (
                        <ErrorMessage/>
                    ) : (
                        cartProducts.map(product => (
                            <div className='flex'>
                                <SidebarCard 
                                    key={product.id}
                                    title={product.title}
                                    price={product.price}
                                    // onEdit={onEdit}
                                    />
                            </div>
                        ))
                        
                    )}
                    <div className={`${styles['cart-sidebar__checkout']} ${styles.checkout}`}>
                        <div className={`${styles.checkout__discount} ${styles.discount}`}>
                            <div className={styles.discount__title}>DISCOUNT</div>
                            <div className={styles.discount__price}>-£4.50</div>
                        </div>
                        <div className={`${styles.checkout__subtotal} ${styles.subtotal}`}>
                            <div className={styles.subtotal__title}>SUBTOTAL (EXCLUDING DELIVERY)</div>
                            <div className={styles.subtotal__price}>£13.50</div>
                            <div className={styles.subtotal__text}>*All taxes are included in product prices</div>
                        </div>


                        <div className={`${styles.checkout__buttons} ${styles.buttons}`}>
                            <Button text="View cart" background='#f8f8f8' padding='7px 0' width='100%'/>
                            <Button text="Checkout" background='black' color="white" padding='7px 0' width='100%'/>
                        </div>
                    </div>
                    <footer className={`${styles['cart-sidebar__footer']} ${styles. footer}`}>
                        <img src="https://media.boohoo.com/i/boohooamplience/minicart-banner-bottom-nh?qlt=default&fmt=auto" alt="" className={styles.footer__img} />
                    </footer>
                </div>
        </>
    )
}

export default CartSidebar
