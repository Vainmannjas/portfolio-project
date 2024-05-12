import { Link } from 'react-router-dom'
import { IoCloseOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoLockClosed } from "react-icons/io5";
import { BsPhoneFill } from "react-icons/bs";
import styles from './SignIn.module.scss'

const SignIn = () => {
  return (
    <div className={styles.signin}>
        <div className="container">
          <form action="" className={`${styles['signin__form']} ${styles.form}`}>
            <h1 className={styles.form__title}>Login</h1>


            <button className={styles.form__close}>
              <IoCloseOutline/>
            </button>

            <div className={`${styles.form__fields} ${styles.fields}`}>
              <div className={`${styles.fields__email} ${styles.email}`}>

                <div className={`${styles.email__top} ${styles.top}`}>
                  <label htmlFor="email" className={styles.top__label}>Email</label>
                  <div className={styles.top__icon}>
                    <MdEmail/>
                  </div>
                </div>


                <input type="email" className={styles.email__input} required/>
              </div>
              <div className={`${styles.fields__password} ${styles.password}`}>

                <div className={`${styles.password__top} ${styles.top}`}>
                  <label htmlFor="password" className={styles.top__label}>Password</label>
                  <div className={styles.top__icon}>
                    <IoLockClosed/>
                  </div>
                </div>


                <input type="password" className={styles.email__input} />
              </div>
              <div className={`${styles.fields__phone} ${styles.phone}`}>

                <div className={`${styles.phone__top} ${styles.top}`}>
                  <label htmlFor="number" className={styles.top__label}>Phone</label>
                  <div className={styles.top__icon}>
                    <BsPhoneFill/>
                  </div>
                </div>

                <input type="number" className={styles.email__input} required/>
              </div>
            </div>

            <div className={styles.form__col}>
              <div className={`${styles.col__remember} ${styles.remember}`}>
                <input type="checkbox" id="rememberPassword" className={styles.remember__checkbox} required/>
                <label htmlFor="rememberPassword" className={styles.remember__label}>Remember me</label>
              </div>
              <Link to="/forgot" className={styles.col__link}>Forgot Password?</Link>
            </div>

            <button className={styles.form__create}>Create</button>
          </form>
        </div>
    </div>
  )
}

export default SignIn
