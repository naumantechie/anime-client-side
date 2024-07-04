import Image from 'next/image';
import { AnimeGridProps } from '@customTypes/types';

import './index.scss';

export default function AnimeGrid({ animeCategory }: AnimeGridProps) {
    return (
        <section className="anime-grid pt-10 pb-10">
            <h2 className="section-title"> Recommended for you </h2>
            <ul className="animes-list flex">
                {animeCategory.map((anime) => (
                    <li className="item" key={anime.id}>
                        <div className="image-wrapper">
                            <Image
                                src={anime.poster}
                                width="175"
                                height="236"
                                alt="anime poster"
                            />
                            <span>{anime.episodes.sub}</span>
                            <span>{anime.episodes.dub}</span>
                        </div>
                        <h3>{anime.name}</h3>
                        <span>{anime.type}</span>
                        <span>{anime.duration}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
