import { useContext, useEffect } from 'react'
import requestApi from '../../api/tmdb_api_config'
import { useParams } from 'react-router'
import MovieHero from './Movie_content/movie_content'
import { CurrentIdContext } from '../../Context/current_id_context/current_id'


const MediaHeroDisplay = () => {
    const { uid } = useParams()

    const { result, setResult, iframeKey, show } = useContext(CurrentIdContext)

    useEffect(() => {
        const movieDetails = async () => {
            try {
                if (uid !== undefined) {
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
                id && <>
                    <MovieHero
                        result={result}
                        iframeKey={iframeKey}
                        show={show}
                    />
                </>
            }
        </>
    )
}

export default MediaHeroDisplay