import { useEffect, useMemo, useState } from 'react'
import Button from '../../../Components/Button/button'
import Container from '../../../Components/Container/container'
import Rating from '../../../Components/Rating/rating'
import apiConfig from '../../../api/api_config'
import requestApi from '../../../api/tmdb_api_config'
import styles from './movie_content.module.scss'
import { TbPlayerPlayFilled } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";


type Result = {
    id: number,
    backdrop_path: string,
    poster_path: string,
    vote_average: number,
    original_title: string,
    overview: string,
    genres: []
}


const MovieHero = ({ id, backdrop_path, poster_path, vote_average, genres, original_title, overview }: Result) => {

    const [videoLink, setVideoLink] = useState<[]>([])
    const [show, setShow] = useState(false)

    
    useEffect(() => {
        const teaser = async () => {
            try {
                const { data } = await requestApi.movieInfo(id, 'videos')
                setVideoLink(data.results)
            } catch (error) {
                //
            }
        }
        teaser()
    }, [id])


    //Loop through the object of arrays and return those whose name value contains 'Trailer'
    const keY = () => {
        const arr: [] = []
        videoLink && videoLink.filter((itm: any) => itm.name.toLowerCase().includes('trailer'))
            .map(itm => arr.push(itm))
        return arr
    }

    //memorize the result of the keY function
    const getKey = useMemo(() => keY(), [videoLink])



    return (
        <div className={styles.movieHero}>
            <img src={apiConfig.originalImg(backdrop_path)} alt="backdrop" className={styles.backDrop} />
            <div className={styles.overlay}>
                <Container>
                    <div className={styles.overlayContent}>
                        <img src={apiConfig.small(poster_path)} alt="poster" className={styles.imgPoster} />
                        <div className={styles.content}>
                            <Rating rating={vote_average} />
                            <span className={styles.title}>{original_title}</span>
                            <span className={styles.overView}>{overview}</span>
                            <div className={styles.Genre}>
                                {
                                    genres && genres.map((itm) => {
                                        const { id, name } = itm
                                        return (
                                            <div key={id} className={styles.GenreList}>
                                                {name}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <Button type='button' btnType='watch' onClick={() => setShow(true)}>
                                <TbPlayerPlayFilled className={styles.btnPlay} />
                            </Button>
                        </div>

                    </div>
                </Container>
            </div>
            {
                show && <div className={styles.teaserOverlayContainer}>
                    {
                        getKey && getKey.filter((_, idx) => idx === 0).map((itm: any) => {
                            const { key } = itm
                            return (
                                <div key={key} className={styles.teaserOverlay}>
                                    <span className={styles.close} onClick={() => setShow(false)}>
                                        <AiOutlineClose className={styles.icn} />
                                    </span>
                                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${key}?autoplay=1`} frameBorder="0" allow="autoplay"></iframe>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default MovieHero