import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import {
    getWatchRecentPromos,
    JikanAPIResponse,
    parseRawPromoData,
    RawPromoData,
} from '../../api/jikanAPI'
import useFetch from '../../hooks/useFetch'
import { Promo } from '../../assets/types'

const Carousel = () => {
    const [promos, setPromos] = useState<Promo[] | null>(null)
    const { data, loading, error } = useFetch<JikanAPIResponse<RawPromoData[]>>(
        getWatchRecentPromos()
    )

    useEffect(() => {
        setPromos(
            data != null
                ? data.data.map((rawPromo) => parseRawPromoData(rawPromo))
                : null
        )
    }, [data])

    if (loading) return <div>Loading...</div>
    if (error != null) return <div>Error</div>
    return (
        <div className='w-full h-[450px] overflow-hidden carousel-image flex items-center  justify-center mb-[1.5rem]'>
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                centeredSlides={true}
                slidesPerView={1}
                autoplay
                navigation
                pagination
                className="swipper"
            >
                {promos?.map(({ id, coverURL, title }, index) => {
                    return (
                        <SwiperSlide key={`${id}-${index}`}>
                            <Link to={`/animes/${id}/${title}`}>
                                <img src={coverURL} alt={title} width="100%" height="100%" />
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Carousel