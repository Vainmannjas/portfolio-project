import { Link } from 'react-router-dom'
import styles from './NotFound.module.scss'
import img from '../../../../public/images/error-page/ERRORPAGE.jpg'

const NotFound = () => {
  return (
    <div className={styles['not-found']}>
        <div className={`${styles['not-found__flex']} ${styles.flex}`}>
            <img 
                src={img}
                alt="" 
                className={styles.flex__img} 
            />
            {/* <div className="center"> */}

            <div className={`${styles.flex__content} ${styles.content}`}>
                <h1 className={styles.content__title}>oh no</h1>      
                <h2 className={styles.content__subtitle}>page not found.</h2>
                 <p className={styles.content__description}>
                    There could be a problem with the URL or the page no longer exists.
                </p>
                <Link to="/" className={styles.content__button}>go to homapage</Link>
            </div>
            {/* </div> */}
        </div>
    </div>
  )
}

export default NotFound
