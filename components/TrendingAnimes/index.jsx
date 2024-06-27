import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './index.scss';

export default function TrendingAnimes({ trendingAnimes }) {
    return (
        <section className="trending-section pt-10 pb-10 custom-container">
            <h2 className="section-title"> Trending </h2>
            <Swiper
                navigation={true}
                slidesPerView={6}
                spaceBetween={20}
                modules={[Navigation]}
            >
                {trendingAnimes.map((anime, index) => (
                    <SwiperSlide key={index}>
                        <div className="meta">
                            <span className="rank">
                                {anime.rank < 10
                                    ? `0${anime.rank}`
                                    : anime.rank}
                            </span>
                            <h3 className="title">{anime.name}</h3>
                        </div>
                        <Image
                            src={anime.poster}
                            width="165"
                            height="236"
                            alt="anime poster"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
