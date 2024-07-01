// 'use cleint';

// import { useState, useEffect } from 'react';

// export const useFetchAnimes = (url) => {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         if (!url) return;

//         const fetchData = async () => {
//             try {
//                 const response = await fetch(
//                     `https://anime-app-chi.vercel.app/anime/${url}`
//                 );
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch data');
//                 }
//                 const result = await response.json();
//                 setData(result);
//                 console.log(result);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [url]);

//     return { data, loading, error };
// };
