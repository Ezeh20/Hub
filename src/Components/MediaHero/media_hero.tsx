import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import MovieHero from './Movie_content/movie_content'
import { CurrentIdContext } from '../../Context/current_id_context/current_id'
import requestApi from '../../api/tmdb_api_config'
import Loading from '../Loading-spinner/loading'
import styles from './media_hero.module.scss'

type Type = {
    media: string
}
const MediaHeroDisplay = ({ media }: Type) => {
    const { uid } = useParams()
    const { setResult, iframeKey, show } = useContext(CurrentIdContext)
    const [resultAlt, setResultAlt] = useState<{}>({})

    useEffect(() => {
        const movieDetails = async () => {
            try {
                if (uid !== undefined) {
                    const { data } = await requestApi.mediaDetails(media, Number(uid))
                    setResultAlt(data)
                    setResult(data)
                }
            } catch (error) {
                //ignore for now
            }
        }
        movieDetails()
    }, [uid])


    return (
        <>
            <MovieHero
                result={resultAlt}
                iframeKey={iframeKey}
                show={show}
            />
        </>
    )
}

export default MediaHeroDisplay