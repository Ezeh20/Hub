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
                if (Number(uid) > 0) {
                    const { data } = await requestApi.movieDetails(Number(uid))
                    setResult(data)
                }
            } catch (error) {
                //ignore for now
            }
        }
        movieDetails()
    }, [uid])


    const {
        id
    }: any = result


    return (
        <>
            {
                id && <div className={styles.motherStyle}>
                    <MovieHero
                        result={result}
                        iframeKey={iframeKey}
                        show={show}
                    />
                    <MovieInformation
                        result={result}
                        iframeKey={iframeKey}
                        setIframeKey={setIframeKey}
                        show={show}
                        setShow={setShow}
                    />
                </div>
            }
        </>
    )
}

export default MovieDetails