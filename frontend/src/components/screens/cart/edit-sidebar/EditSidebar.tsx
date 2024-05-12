import { FC } from 'react'
import Close from '../../../ui/buttons/close/Close'
import styles from './EditSidebar.module.scss'
import Button from '../../../ui/buttons/Button'

interface IEditSidebar {
  onClose: () => void
}

const EditSidebar: FC<IEditSidebar> = ({onClose}) => {
  return (
    <div className={styles['edit-sidebar']}>
      <div className={`${styles['edit-sidebar__edit']} ${styles.edit}`}>
        <div className={styles.edit__title}>EDIT PRODUCT</div>
        <button onClick={onClose} className={styles.close}>
          <Close/>
        </button>
      </div>
      <img 
        src="https://media.boohoo.com/i/boohoo/gzz95594_blue_xl?w=300&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit" 
        alt="" 
        className={styles['edit-sidebar__img']} 
      />
      <div className={`${styles['edit-sidebar__parameters']} ${styles.parameters}`}>
        <div className={`${styles.parameters__colors} ${styles.colors}`}>
            {/* <div className={styles.colors__title}>COLOR:</div> */}
            <label htmlFor="colors" className={styles.colors__label}>Color:</label>
            <select id="colors" className={styles.colors__select}>
                <option className={styles.colors__option} value="">Blue</option>
                <option value="">Red</option>
                <option value="">Yellow</option>
            </select>
        </div>
        <div className={`${styles.parameters__quantity} ${styles.quantity}`}>
            <label htmlFor="quantity" className={styles.quantity__label}>Quantity</label>
            <select id="quantity" className={styles.quantity__select}>
                <option className={styles.quantity__option} value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
                <option value="">6</option>
                <option value="">7</option>
                <option value="">8</option>
                <option value="">9</option>
                <option value="">10</option>
            </select>
        </div>

      </div>
      <div className={`${styles['edit-sidebar__update']} ${styles.update}`}>
        <Button text="cancel" />
        <Button text="update"/>
      </div>
    </div>
  )
}

export default EditSidebar
