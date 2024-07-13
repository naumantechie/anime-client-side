import Link from 'next/link';
import Image from 'next/image';
import Badge from '@components/AnimeElements';
import { AnimeGridProps } from '@customTypes/types';
import {
    faClosedCaptioning,
    faMicrophone,
} from '@fortawesome/free-solid-svg-icons';

import './index.scss';

export default function AnimeGrid({ animeCategory }: AnimeGridProps) {
    return (
        <section className="anime-grid pt-10 pb-10">
            <h2 className="section-title"> Recommended for you </h2>
            <ul className="animes-list flex">
                {animeCategory.map((anime) => (
                    <li className="item" key={anime.id}>
                        <Link href={anime.id}>
                            <div className="image-wrapper relative">
                                <Image
                                    src={anime.poster}
                                    width="175"
                                    height="236"
                                    alt="anime poster"
                                />

                                <div className="episodes-info flex">
                                    <Badge
                                        text={anime.episodes.sub}
                                        iconType={faClosedCaptioning}
                                        bgColor={'green'}
                                    />

                                    <Badge
                                        text={anime.episodes.dub}
                                        iconType={faMicrophone}
                                        bgColor={'blue'}
                                    />
                                </div>
                            </div>
                            <h3>{anime.name}</h3>
                            <div className="info">
                                <span>{anime.type}</span>
                                <span>{anime.duration}</span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
