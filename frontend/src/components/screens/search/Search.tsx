import { FC, useEffect, useState } from "react"
import styles from './Search.module.scss'
import { IProduct } from "../../../types/product.interface"
import { getProducts } from "../../../utils/getProducts";
import ProductCard from "../../ui/productCard/ProductCard";

const Search: FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch(error) {
                console.error('Ошибка загрузки продуктов: ', error);
            }
        }
        fetchProducts();
    }, []);





  return (
    <div className={styles.search}>
        <div className="container">
            <div className={styles.search__products}>

                {products.map(product => (
                    <ProductCard
                    key={product.id}
                    id={product.id}
                    images={product.images}
                    colors={product.colors}
                    title={product.title}
                    price={product.price}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Search
