import Image from 'next/image';
import { fetchAnimeData } from '@app/action';

export default async function AnimeInfo({ params }) {
    const { animeID } = params;
    const data = await fetchAnimeData(`info?id=${animeID}`);

    const info = data?.anime.info || [];
    const moreInfo = data?.anime.moreInfo || [];

    return (
        <article>
            <section>
                <div className="poster">
                    <Image
                        src={info.poster}
                        width="175"
                        height="236"
                        alt="anime poster"
                    />
                </div>

                <div className="ani-info">
                    <h1>{info.name}</h1>

                    <ul className="stats">
                        <li>
                            <span>{info.stats.ratings}</span>
                        </li>
                        <li>
                            <span>{info.stats.quality}</span>
                        </li>
                        <li>
                            <span>{info.stats.episodes.sub}</span>
                        </li>
                        <li>
                            <span>{info.stats.episodes.dub}</span>
                        </li>
                        <li>
                            <span>{info.stats.type}</span>
                        </li>
                        <li>
                            <span>{info.stats.duration}</span>
                        </li>
                    </ul>

                    <p className="desc">{info.description}</p>
                </div>

                <div className="other-ani-info">
                    <p className="jap-name">Japenese: {moreInfo.japanese}</p>
                    <p className="aired">Aired: {moreInfo.aired}</p>
                    <p className="premiered">Premiered: {moreInfo.premiered}</p>
                    <p className="duration">Duration: {moreInfo.duration}</p>
                    <p className="status">Staus: {moreInfo.status}</p>
                    <p className="score">MAL Score: {moreInfo.malscore}</p>

                    <ul className="genres">
                        {moreInfo.genres.map((genre, index) => (
                            <li key={index}>
                                <span>{genre}</span>
                            </li>
                        ))}
                    </ul>

                    <p className="studio">Sutdios: {moreInfo.malscore}</p>

                    <p className="produces">
                        {moreInfo.producers.map((producer, index) => producer)}
                    </p>
                </div>
            </section>
            {/* Display other anime information as needed */}
        </article>
    );
}
