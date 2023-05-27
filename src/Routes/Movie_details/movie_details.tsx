import { useEffect, useState } from 'react'
import requestApi from '../../api/tmdb_api_config'
import { useLocation } from 'react-router'
import MovieHero from './Movie_content/movie_content'


const MovieDetails = () => {
    const location = useLocation()
    const { state } = location
    const [result, setResult] = useState<object>({})

    useEffect(() => {
        const movieDetails = async () => {
            try {
                const { data } = await requestApi.movieDetails(state)
                setResult(data)
            } catch (error) {
                //ignore
            }
        }
        movieDetails()
    }, [])



    const {
        backdrop_path,
        budget,
        genres,
        homepage,
        id,
        original_title,
        overview,
        popularity,
        poster_path,
        release_date,
        revenue,
        runtime,
        status,
        vote_average
    }: any = result


    return (
        <div>
            {id && <MovieHero backdrop_path={backdrop_path}
                poster_path={poster_path}
                vote_average={vote_average}
                id={id}
                genres={genres}
                original_title={original_title}
                overview={overview} />}
        </div>
    )
}

export default MovieDetails