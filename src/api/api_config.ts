const keyValue = import.meta.env.VITE_TMDB_API_KEY

const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3',
    api_key: keyValue,
    originalImg: (path: string) => `https://image.tmdb.org/t/p/original${path}`,
    small: (path: string) => `https://image.tmdb.org/t/p/w500${path}`
}

export default apiConfig