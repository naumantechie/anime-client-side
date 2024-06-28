'use server';

export async function fetchAnimeData(url) {
    try {
        const response = await fetch(
            `https://anime-app-chi.vercel.app/anime/${url}`
        );
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
        throw new Error(err.message);
    }
}
