import { FC } from "react"
import follow1 from '../../../../../public/images/follow/follow-01.jpg'
import follow2 from '../../../../../public/images/follow/follow-02.jpg'
import follow3 from '../../../../../public/images/follow/follow-03.jpg'
import follow4 from '../../../../../public/images/follow/follow-04.jpg'
import follow5 from '../../../../../public/images/follow/follow-05.jpg'
import './Follow.scss'

const Follow: FC = () => {
  return (
    <section className="follow">
        <div className="container">
            <h2 className="follow__title title">Follow Us</h2>
            <div className="follow__grid grid">
                    <img src={follow1} alt="" className="grid__img" />
                    <img src={follow2} alt="" className="grid__img" />
                    <img src={follow3} alt="" className="grid__img" />
                    <img src={follow4} alt="" className="grid__img" />
                    <img src={follow5} alt="" className="grid__img" />
            </div>
        </div>
    </section>
  )
}

export default Follow
