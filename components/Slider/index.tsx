'use client';

import Watch from '@components/Buttons/Watch';
import Details from '@components/Buttons/Details';
import Badge from '@components/AnimeElements';
import { SliderProps, SpotlightAnimes } from '@customTypes/types';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCirclePlay,
    faClock,
    faCalendar,
    faClosedCaptioning,
    faMicrophone,
} from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import 'swiper/css/navigation';
import './index.scss';
import '../Buttons/buttonStyles.scss';

export default function Slider({ spotlightAnimes }: SliderProps) {
    console.log(spotlightAnimes);
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
                                <li>
                                    <FontAwesomeIcon icon={faCirclePlay} />
                                    <span>{anime.otherInfo[0]}</span>
                                </li>

                                <li>
                                    <FontAwesomeIcon icon={faClock} />
                                    <span>{anime.otherInfo[1]}</span>
                                </li>

                                <li>
                                    <FontAwesomeIcon icon={faCalendar} />
                                    <span>{anime.otherInfo[2]}</span>
                                </li>

                                <li>
                                    <Badge
                                        text={anime.otherInfo[3]}
                                        iconType={false}
                                        hasborderRadius={true}
                                        textColor={false}
                                        bgColor={'pink'}
                                    />
                                </li>
                            </ul>
                            <ul className="episodes-info flex">
                                <li>
                                    <Badge
                                        text={anime.episodes.sub}
                                        iconType={faClosedCaptioning}
                                        hasborderRadius={false}
                                        textColor={false}
                                        bgColor={'#blue'}
                                    />
                                </li>
                                {anime.episodes.dub === null && (
                                    <li>
                                        <Badge
                                            text={anime.episodes.sub}
                                            iconType={faMicrophone}
                                            hasborderRadius={false}
                                            textColor={false}
                                            bgColor={'#blue'}
                                        />
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
                                <Watch />
                                <Details animeID={anime.id} />
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
