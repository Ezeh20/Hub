import { useEffect, useState } from 'react'
import requestApi from '../../api/tmdb_api_config'
import { useParams } from 'react-router'
import MovieHero from './Movie_content/movie_content'
import MovieInformation from './Movie_Information/movie_information'
import styles from './movie.module.scss'



const MovieDetails = () => {
    const { uid } = useParams()
    const [result, setResult] = useState<object>({})
    const [iframeKey, setIframeKey] = useState('')
    const [show, setShow] = useState(false)

    useEffect(() => {
        const movieDetails = async () => {
            try {
                const { data } = await requestApi.movieDetails(Number(uid))
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
        original_language,
        runtime,
        status,
        vote_average
    }: any = result


    return (
        <>
            {
                id && <div className={styles.motherStyle}>
                    <MovieHero backdrop_path={backdrop_path}
                        poster_path={poster_path}
                        vote_average={vote_average}
                        id={id}
                        genres={genres}
                        original_title={original_title}
                        overview={overview}
                        runtime={runtime}
                        status={status}
                        iframeKey={iframeKey}
                        setIframeKey={setIframeKey}
                        show={show}
                        setShow={setShow} />
                    <MovieInformation id={id} original_language={original_language}
                        budget={budget} revenue={revenue} release_date={release_date}
                        popularity={popularity}
                        homepage={homepage}
                        iframeKey={iframeKey}
                        setIframeKey={setIframeKey}
                        show={show}
                        setShow={setShow} />
                </div>
            }
        </>
    )
}

export default MovieDetails