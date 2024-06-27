'use client';
import Carousel from '@components/Carousel/index';
import TrendingAnimes from '@components/TrendingAnimes/index';
import { useFetchAnimes } from '@hooks/useFetchAnimes';

export default function Home() {
    const { data, loading, error } = useFetchAnimes(
        'https://anime-app-chi.vercel.app/anime/home'
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const spotlightAnimes = data?.spotlightAnimes || [];
    const trendingAnimes = data?.trendingAnimes || [];

    return (
        <>
            <Carousel spotlightAnimes={spotlightAnimes} />
            <TrendingAnimes trendingAnimes={trendingAnimes} />
        </>
    );
}
