'use server';

// export interface AnimeData {

// }

export async function fetchAnimeData(url: string): Promise<any> {
    try {
        const response = await fetch(
            `https://anime-app-chi.vercel.app/anime/${url}`
        );
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        throw new Error(err.message);
    }
}
