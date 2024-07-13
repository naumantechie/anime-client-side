import Image from 'next/image';
import Watch from '@components/Buttons/Watch';
import Badge from '@components/AnimeElements';
import AnimeGrid from '@components/AnimeGrid';
import { fetchAnimeData } from '@app/action';
import { AnimeData, AnimeGridData, Info, MoreInfo } from '@customTypes/types';
import {
    faClosedCaptioning,
    faMicrophone,
} from '@fortawesome/free-solid-svg-icons';

import './index.scss';
import '@components/Buttons/buttonStyles.scss';

interface AnimeInfoProps {
    params: {
        animeID: string;
    };
}

export default async function AnimeInfo({ params }: AnimeInfoProps) {
    const { animeID } = params;
    const data: AnimeData = await fetchAnimeData(`info?id=${animeID}`);

    const info = data?.anime.info || ({} as Info);
    const moreInfo = data?.anime.moreInfo || ({} as MoreInfo);
    const recommendedAnimes: AnimeGridData[] = data?.recommendedAnimes || [];

    return (
        <article className="custom-container">
            <section className="ani-details-wrapper flex relative">
                <div className="bg-decor">
                    <div
                        style={{ backgroundImage: `url(${info.poster})` }}
                    ></div>
                </div>

                <div className="poster">
                    <Image
                        className="w-full"
                        src={info.poster}
                        width="175"
                        height="236"
                        alt="anime poster"
                    />
                </div>

                <div className="ani-info">
                    <h1 className="title">{info.name}</h1>

                    <div className="stats flex">
                        <ul className="cat-1">
                            <li className="rating">
                                <Badge
                                    text={info.stats.rating}
                                    bgColor="white"
                                />
                            </li>
                            <li className="quality">
                                <Badge
                                    text={info.stats.quality}
                                    bgColor="pink"
                                />
                            </li>
                            <li className="sub">
                                <Badge
                                    text={info.stats.episodes.sub}
                                    iconType={faClosedCaptioning}
                                    bgColor="green"
                                />
                            </li>
                            <li className="dub">
                                <Badge
                                    text={info.stats.episodes.dub}
                                    iconType={faMicrophone}
                                    bgColor="blue"
                                />
                            </li>
                        </ul>

                        <ul className="cat-2">
                            <li className="type">
                                <span>{info.stats.type}</span>
                            </li>
                            <li className="dur">
                                <span>{info.stats.duration}</span>
                            </li>
                        </ul>
                    </div>

                    <p className="desc">{info.description}</p>

                    <div className="btns">
                        <Watch />
                    </div>
                </div>

                <div className="other-ani-info">
                    <p className="jap-name">
                        <strong>Japenese:</strong> {moreInfo.japanese}
                    </p>
                    <p className="aired">
                        <strong>Aired:</strong> {moreInfo.aired}
                    </p>
                    <p className="premiered">
                        <strong>Premiered:</strong> {moreInfo.premiered}
                    </p>
                    <p className="duration">
                        <strong>Duration:</strong> {moreInfo.duration}
                    </p>
                    <p className="status">
                        <strong>Staus:</strong> {moreInfo.status}
                    </p>
                    <p className="score">
                        <strong>MAL Score:</strong> {moreInfo.malscore}
                    </p>

                    <ul className="genres">
                        <strong>Genres: </strong>
                        {moreInfo.genres?.map((genre, index) => (
                            <li key={index}>
                                <span>{genre}</span>
                            </li>
                        ))}
                    </ul>

                    <p className="studio">
                        <strong>Sutdios:</strong> {moreInfo.malscore}
                    </p>

                    <p className="produces">
                        <strong>Producers: </strong>
                        {moreInfo.producers && moreInfo.producers.length > 0
                            ? moreInfo.producers.join(', ')
                            : 'No producers available'}
                    </p>
                </div>
            </section>

            <AnimeGrid animeCategory={recommendedAnimes} />
        </article>
    );
}
