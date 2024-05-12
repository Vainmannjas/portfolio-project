import { FC, useEffect, useState } from 'react'
import ProductCard from '../../ui/productCard/ProductCard'
import styles from './Coats.module.scss'
import { IProduct } from '../../../types/product.interface'
import { getProducts } from '../../../utils/getProducts'

const Coats: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async() => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch(error) {
        console.error('Ошибка загрузки плащей: ', error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className={styles.coats}>
        <div className="container">
            <div className={styles.coats__row}>
              {products.map(product => (

                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price_new={product.price_new}
                  price_old={product.price_old}
                  images={product.images}
                />
              ))}
            </div>
        </div>
    </div>
  )
}

export default Coats