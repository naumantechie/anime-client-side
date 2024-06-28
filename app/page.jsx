import Slider from '@components/Slider/index';
import AnimeCarousel from '@components/AnimeCarousel/index';

import { fetchAnimeData } from './action';

export default async function Home() {
    const data = await fetchAnimeData('home');

    const spotlightAnimes = data?.spotlightAnimes || [];
    const trendingAnimes = data?.trendingAnimes || [];

    return (
        <>
            <Slider spotlightAnimes={spotlightAnimes} />
            <AnimeCarousel trendingAnimes={trendingAnimes} />
        </>
    );
}
