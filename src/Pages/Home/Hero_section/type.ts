export type heroType = {
    trendingResult: [],
    current: number,
    setCurrent: React.Dispatch<React.SetStateAction<number>>
}

export type Content = {
    backdrop_path: string,
    genre_ids: [],
    id: number,
    original_title: undefined | string | any,
    vote_average: number,
    poster_path: string,
    overview: string,
    name: undefined | string | any
}

export type Filter = {
    id: number,
    name: string
}