'use client';
import Slider from '@components/Slider/index';
import AnimeCarousel from '@components/AnimeCarousel/index';
import { useFetchAnimes } from '@hooks/useFetchAnimes';

export default function Home() {
    const { data, loading, error } = useFetchAnimes('home');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const spotlightAnimes = data?.spotlightAnimes || [];
    const trendingAnimes = data?.trendingAnimes || [];

    return (
        <>
            <Slider spotlightAnimes={spotlightAnimes} />
            <AnimeCarousel trendingAnimes={trendingAnimes} />
        </>
    );
}
