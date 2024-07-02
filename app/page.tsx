import Slider from '@components/Slider/index';
import AnimeCarousel from '@components/AnimeCarousel/index';

import { fetchAnimeData } from './action';
import {
    HomeAnimes,
    SpotlightAnimes,
    TrendingAnimes,
} from '@customTypes/types';

export default async function Home() {
    const data: HomeAnimes = await fetchAnimeData('home');

    const spotlightAnimes: SpotlightAnimes[] = data?.spotlightAnimes || [];
    const trendingAnimes: TrendingAnimes[] = data?.trendingAnimes || [];

    return (
        <>
            <Slider spotlightAnimes={spotlightAnimes} />
            <AnimeCarousel trendingAnimes={trendingAnimes} />
        </>
    );
}
