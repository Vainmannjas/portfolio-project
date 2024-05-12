import { FC, useEffect, useState } from "react"
import ProductCard from "../../../ui/productCard/ProductCard"
import './BestSellers.scss'
import { Link } from "react-router-dom"

// Swiper
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { IProduct } from "../../../../types/product.interface"
import { getProducts } from "../../../../utils/getProducts"

const BestSellers: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [showSwiper, setShowSwiper] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async() => {
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
    <section className="best-sellers">
        <div className="container">
            <div className="best-sellers__wrapper">
                <h2 className="best-sellers__title title">Best Sellers</h2>
                <div className="best-sellers__link">
                    <Link 
                      to="#!" 
                      className="best-sellers__btn btn btn-small title-muted" 
                      onClick={() => setShowSwiper(false)}
                    >
                      View All
                    </Link>
                </div>
            </div>

                {showSwiper ? (
                  <div className="best-sellers__carousel">
                  <Swiper
                    modules={[ Pagination, A11y]}
                    spaceBetween={24}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                  >
                    {products.map(product => (
                      <SwiperSlide key={product.id}>
                        <ProductCard 
                          
                          id={product.id}
                          price={product.price}
                          images={product.images}
                          colors={product.colors}
                          title={product.title}
                          />
                      </SwiperSlide>
                    ))}

                    <div className="pagination-container">
                      <div className="swiper-pagination"></div>
                    </div>
                  </Swiper>
                </div>
                ) : (
                <div className="best-sellers__grid">
                  {products.map(product => (
                    <ProductCard 
                      key={product.id}
                      id={product.id}
                      price={product.price}
                      images={product.images}
                      colors={product.colors}
                      title={product.title}
                    />
                  ))}
                </div>
                )}
                

        </div>

    </section>
  )
}

export default BestSellers
