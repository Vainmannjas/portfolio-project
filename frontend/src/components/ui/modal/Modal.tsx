import logo from '../../../../public/images/logo/Logo.svg'
import { IoCloseOutline } from "react-icons/io5";
import styles from './Modal.module.scss'
import { FC } from 'react';

interface IModal {
    onClose: () => void
}

const Modal: FC<IModal> = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
        <div className={styles.modal}>
            <div className={`${styles.modal__first} ${styles.first}`}>
                <img 
                    src="https://formsv2.soundestlink.com/cdn-cgi/image/fit=scale-down,width=1066/forms/65b3084e3aab811dd52a108b" 
                    alt="" 
                    className={styles.first__img} 
                />
            </div>
            <div className={`${styles.modal__content} ${styles.content}`}>
                <img src={logo} className={styles.content__logo}/>
                <button className={`${styles.content__button} ${styles.button}`} onClick={onClose}>
                    <IoCloseOutline className={styles.button__img}/>
                </button>
                <h1 className={styles.content__sale}>10% OFF</h1>
                <p className={styles.content__description}>
                    ENJOY 10% OFF ON YOUR FIRST ORDER WHEN YOU SUBSCRIBE TO OUR NEWSLETTER.
                </p>
                <form 
                    // onSubmit={onSumbit} 
                    className={`${styles.content__form} ${styles.form}`}>
                    <div className={`${styles.form__email} ${styles.email}`}>
                        <input placeholder="Enter your email:" type="email" id="email" className={styles.email__input} required/>
                    </div>
                    <div className={`${styles.form__number} ${styles.number}`}>
                        <div className={`${styles.number__country} ${styles.country}`}>
                            <label htmlFor="contryCode" className={styles.country__label}></label>
                            <select id="contryCode" className={`${styles.country__select} ${styles.select}`}>
                                <option value="+1" className={styles.select__option}>+1 (US)</option>
                                <option value="+44" className={styles.select__option}>+44 (UK)</option>
                                <option value="+44" className={styles.select__option}>+44 (UK)</option>
                                <option value="+44" className={styles.select__option}>+44 (UK)</option>
                                <option value="+44" className={styles.select__option}>+44 (UK)</option>
                                <option value="+44" className={styles.select__option}>+44 (UK)</option>
                                <option value="+44" className={styles.select__option}>+44 (UK)</option>
                                <option value="+44" className={styles.select__option}>+44 (UK)</option>
                                <option value="+44" className={styles.select__option}>+44 (UK)</option>
                                <option value="+44" className={styles.select__option}>+44 (UK)</option>
                                <option value="+44" className={styles.select__option}>+44 (UK)</option>
                                <option value="+44" className={styles.select__option}>+44 (UK)</option>
                                <option value="+44" className={styles.select__option}>+44 (UK)</option>
                                <option value="+44" className={styles.select__option}>+44 (UK)</option>
                                <option value="+44" className={styles.select__option}>+44 (UK)</option>
                                <option value="+44" className={styles.select__option}>+44 (UK)</option>
                                <option value="+44" className={styles.select__option}>+44 (UK)</option>
                                <option value="+44" className={styles.select__option}>+44 (UK)</option>
                                <option value="+44" className={styles.select__option}>+44 (UK)</option>
                                <option value="+44" className={styles.select__option}>+44 (UK)</option>
                                <option value="+44" className={styles.select__option}>+44 (UK)</option>
                            </select>
                        </div>
                        <div className={`${styles.number__phone} ${styles.phone}`}>
                            <input placeholder='Phone' type="tel" id='phoneNumber' className={styles.phone__input} required/>
                        </div>
                    </div>
                    <div className={`${styles.form__checkbox} ${styles.checkbox}`}>
                        <input type="checkbox" id="receiveOffers" className={styles.checkbox__input} required />
                        <label htmlFor="receiveOffers" className={styles.checkbox__label}>Receive offers message</label>
                    </div>
                    <p className={styles.form__description}>
                        By checking this box, I consent to receive marketing text messages through an automatic telephone dialing system at the number provided.
                    </p>
                    <button 
                        // type="submit" 
                        // value="submit" 
                        className={styles.form__button}
                    >
                        Activate discount
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Modal
