import { FC } from "react"
import collectionImg from '../../../../../public/images/collection/collection-01.jpg'
import collectionImg2 from '../../../../../public/images/collection/collection-02.jpg'
import collectionImg3 from '../../../../../public/images/collection/collection-03.jpg'
import collectionImg4 from '../../../../../public/images/collection/collection-04.jpg'
import './Collection.scss'
import CardCollection from "../../../ui/card-collection/CardCollection"

const Collection: FC = () => {
  return (
    <section className="collection">
        <div className="container">
            <h2 className="collection__title title">Collection</h2>
            <div className="collection__cols">
                <div className="collection__col">
                    <CardCollection link="/blouses" img={collectionImg} text='Blouses'/>
                    <CardCollection link="/dresses" img={collectionImg2} text='Dresses'/>
                </div>
                <div className="collection__col">
                    <CardCollection link="/pants" img={collectionImg3} text='Pants'/>
                    <CardCollection link="/outwear" img={collectionImg4} text='Outwear'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Collection
