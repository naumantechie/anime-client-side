'use client';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useFetchAnimes } from '@hooks/useFetchAnimes';

export default function AnimeInfo() {
    const { animeID } = useParams();
    const {
        data: anime,
        loading,
        error,
    } = useFetchAnimes(animeID ? `info?id=${animeID}` : null);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>{anime.anime.info.name}</h1>
            {/* Display other anime information as needed */}
        </div>
    );
}
