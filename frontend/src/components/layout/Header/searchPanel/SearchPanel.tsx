import search from '../../../../../public/images/navigation-icons/search.svg';
import { IoCloseOutline } from "react-icons/io5";
import styles from './SearchPanel.module.scss'
import { useEffect, useState } from 'react';
import { getProducts } from '../../../../utils/getProducts';
import { IProduct } from '../../../../types/product.interface';
import ProductCard from '../../../ui/productCard/ProductCard';

const SearchPanel = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState<IProduct[]>([]);

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

    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);

        const results = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(results);
    }

    return (
        <div className={styles['search-panel']}>
            <input 
                type="text" 
                className={styles['search-panel__input']} 
                placeholder='Search'
                value={searchTerm}
                onChange={handleSearch}
            />
            <img src={search} alt="" className={styles['search-panel__search-icon']}/>
            <IoCloseOutline className={styles['search-panel__close-icon']}/>
            <button className={styles['search-panel__search']}>Искать</button>
            <button className={styles['search-panel__close']}>Закрыть</button>
            <div className={styles['search-panel__products']}>
                <div className="flex">

                {searchResults.map(product => (
                    <ProductCard
                    key={product.id}
                    title={product.title}
                    images={product.images}
                    price={product.price}
                    colors={product.colors}
                    
                    />
                ))}
                </div>
            </div>
        </div>
    );
}

export default SearchPanel;
