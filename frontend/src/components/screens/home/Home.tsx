import { FC } from "react"
import Banner from "./banner/Banner"
import BestSellers from "./best-sellers/BestSellers"
import './Home.scss'
import Collection from "./collection/Collection"
import Follow from "./follow/Follow"
// import Modal from "../../ui/modal/Modal"

const Home: FC = () => {
  return (
    <main className="home">
      {/* <Modal/> */}
      <Banner/>
      <BestSellers/>
      <Collection/>
      <Follow/>
    </main>
  )
}

export default Home
