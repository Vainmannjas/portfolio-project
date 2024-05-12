import { FC } from "react"
import styles from './Banner.module.scss'
import Carousel from "./carousel/Carousel"

const Banner: FC = () => {
  return (
    <section className={styles.banner}>
      <Carousel/>
    </section>
  )
}

export default Banner
