import { FC } from 'react'
import styles from './SidebarCard.module.scss'
import Close from '../../buttons/close/Close'

interface ISidebarCard {
    title: string
    price: number
    
}

const SidebarCard: FC<ISidebarCard> = ({title, price, onEdit}) => {
  return (
    <article 
        className={styles['sidebar-card']}
        // className='grid grid-cols-6 grid-cols-3 border-b border-gray-300'
    >
        <div className={`${styles['cart-sidebar__content']} ${styles.content}`}>
            {/* <img
                src={parsedImages[currentColor]} 
                alt=""
                className={styles.content__img}
            /> */}
            <div className={`${styles['content__row-1']} ${styles['row-1']}`}>
                <div className={styles['row-1__title']}>{title}</div>
                <div className={styles.button__cont}>
                    <Close />
                </div>
            </div>
            <div className={`${styles['content__row-2']} ${styles['row-2']}`}>
                <div className={styles['row-2__size']}>14</div>
                <div className={styles['row-2__quantity']}>1</div>
                <div className={styles['row-2__available']}>In stock</div>
            </div>
            <div className={`${styles['content__row-3']} ${styles['row-3']}`}>
                <button onClick={onEdit} className={styles['row-3__edit']}>Edit</button>
                <div className={`${styles['row-3__price']} ${price}`}>
                    <div className={styles.price__prev}>{price}</div>
                    <div className={styles.price__new}>{price}</div>
                </div>
            </div>
        </div>
    </article>
  )
}

export default SidebarCard
