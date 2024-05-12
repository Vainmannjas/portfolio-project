import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './Carousel.module.scss'



const Carousel = () => {
  return (
    <>


        <Swiper
            slidesPerView={1}
            autoplay={{
                delay: 2500
            }}
            modules={[ Autoplay ]}
            style={{
                width: "99vw",
                objectFit: "cover"
            }}
            
        >
            <SwiperSlide 
                style={{ height: `calc(100vh - 109.67px)`}}
            >
                <img src="https://images.unsplash.com/photo-1617339847542-5257a2f8b145?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </SwiperSlide>
            <SwiperSlide 
                style={{ height: `calc(100vh - 109.67px)`}}
            >
                <img src="https://images.unsplash.com/photo-1612731486606-2614b4d74921?q=80&w=2620&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </SwiperSlide>
            <SwiperSlide 
                style={{ height: `calc(100vh - 109.67px)`}}
            >
                <img src="https://images.unsplash.com/photo-1653159057664-3823f35568f5?q=80&w=2704&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </SwiperSlide>
            <SwiperSlide 
                style={{ height: `calc(100vh - 109.67px)`}}
            >
                <img src="https://images.unsplash.com/flagged/photo-1553802922-2eb2f7f2c65b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </SwiperSlide>
            <SwiperSlide 
                style={{ height: `calc(100vh - 109.67px)`}}
            >
                <img src="https://images.unsplash.com/photo-1617339648404-1a5228a8e533?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </SwiperSlide>
        ...
        </Swiper>
    </>
  )
}

export default Carousel
