'use client';

import Link from 'next/link';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCirclePlay,
    faClock,
    faCalendar,
    faClosedCaptioning,
    faMicrophone,
    faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import 'swiper/css/navigation';
import './index.scss';
import { SliderProps, SpotlightAnimes } from '@customTypes/types';

export default function Slider({ spotlightAnimes }: SliderProps) {
    return (
        <div className="slide-container">
            <Swiper
                navigation={true}
                loop={true}
                autoplay={false}
                modules={[Autoplay, Navigation]}
            >
                {spotlightAnimes.map((anime: SpotlightAnimes) => (
                    <SwiperSlide key={anime.id}>
                        <div className="anime-meta">
                            <div className="ranking">
                                #{anime.rank} Spotlight
                            </div>
                            <div className="title">{anime.name}</div>
                            <ul className="other-info flex">
                                {anime.otherInfo.map((info, index) => (
                                    <li key={index}>
                                        {index === 0 && (
                                            <FontAwesomeIcon
                                                icon={faCirclePlay}
                                            />
                                        )}
                                        {index === 1 && (
                                            <FontAwesomeIcon icon={faClock} />
                                        )}
                                        {index === 2 && (
                                            <FontAwesomeIcon
                                                icon={faCalendar}
                                            />
                                        )}
                                        <span>{info}</span>
                                    </li>
                                ))}
                            </ul>
                            <ul className="episodes-info flex">
                                <li>
                                    <FontAwesomeIcon
                                        icon={faClosedCaptioning}
                                    />
                                    <span>{anime.episodes.sub} </span>
                                </li>
                                {anime.episodes.dub === null && (
                                    <li>
                                        <FontAwesomeIcon icon={faMicrophone} />
                                        <span>{anime.episodes.dub}</span>
                                    </li>
                                )}
                                {anime.episodes.sub === anime.episodes.dub && (
                                    <li>
                                        <span>{anime.episodes.sub}</span>
                                    </li>
                                )}
                            </ul>
                            <p className="desc">{anime.description}</p>

                            <div className="btns">
                                <Link href="#" className="watch">
                                    <FontAwesomeIcon icon={faCirclePlay} />
                                    Watch Now
                                </Link>
                                <Link href={`/${anime.id}`} className="details">
                                    Details
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </Link>
                            </div>
                        </div>

                        <picture className="poster">
                            <img src={anime.poster} alt="poster of anime" />
                        </picture>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
