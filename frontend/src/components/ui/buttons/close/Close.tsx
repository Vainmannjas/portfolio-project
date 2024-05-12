import { IoClose } from "react-icons/io5";
import styles from './Close.module.scss'

const Close = () => {
  return (
    <button className={styles.close}>
      <IoClose/>
    </button>
  )
}

export default Close
