/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import apiConfig from "../../../api/api_config"
import styles from './hero.module.scss'
import Container from "../../../Components/Container/container"
import { TbSquareRoundedArrowLeftFilled, TbSquareRoundedArrowRightFilled } from "react-icons/tb";
import requestApi from "../../../api/tmdb_api_config";
import { heroType, Filter, Content } from "./type";
import Info from "./Content/content";


const Hero = (props: heroType) => {
    const {
        trendingResult,
        current,
        setCurrent
    } = props

    const [autoPlay, setAutoPlay] = useState<boolean>(false)
    const [genre, setGenre] = useState<[]>([])
    const [toggleWatch, setToggleWatch] = useState<boolean>(false)
    let play: any = null;

    useEffect(() => {
         autoPlay && setTimeout(() => {
            next()
        }, 7000)
    })


    useEffect(() => {
        const genre = async () => {
            const req = requestApi.movieGenres()
            const { genres } = await (await req).data
            setGenre(genres)
        }
        genre()
    }, [])

    //get the top n to be used in a slide show carousel 
    const top10 = trendingResult.slice(0, 10)
    //function to toggle the next showcase
    const next = () => {
        setCurrent(current === top10.length - 1 ? 0 : current + 1)
    }
    //function to toggle the prev showcase
    const prev = () => {
        setCurrent(current === 0 ? top10.length - 1 : current - 1)
    }
    //function to close the trailer modal
    const closeModal = () => {
        setToggleWatch(curr => !curr)
        setAutoPlay(true)
    }

    return (
        <div className={styles.carousel}
            onMouseEnter={() => { setAutoPlay(false); clearTimeout(play) }}
            onMouseLeave={() => setAutoPlay(true)}
        >

            <div className={styles.carouselContainer}>
                {top10.map((item, idx) => {
                    const {
                        backdrop_path,
                        genre_ids,
                        id,
                        original_title,
                        vote_average,
                        poster_path,
                        overview,
                    }: Content = item
                    const genreArr: [] = []
                    genre_ids && genre_ids.forEach((e: number) => {
                        genre && genre.filter((itm: Filter) => itm.id === e).map(itm => genreArr.push(itm))

                    })

                    const rating = vote_average * 10
                    return (
                        <div key={id} className={idx === current ? `${styles.hero} ${styles.heroActive}` : `${styles.hero}`}>
                            <img src={apiConfig.originalImg(backdrop_path)} alt="backdrop" className={styles.backDrop}
                            />
                            <div className={styles.overlay}>
                                <Container>
                                    <Info original_title={original_title}
                                        poster_path={poster_path}
                                        overview={overview}
                                        rating={rating}
                                        genreArr={genreArr}
                                        setToggleWatch={setToggleWatch}
                                        setAutoPlay={setAutoPlay}
                                    />
                                </Container>
                            </div>
                            {
                                toggleWatch &&
                                <div className={styles.modal}>
                                    <div>
                                        <p>{original_title}</p>
                                        <button onClick={() => closeModal()}>close</button>
                                    </div>
                                </div>
                            }
                            <button onClick={prev} className={styles.btn}>
                                <TbSquareRoundedArrowLeftFilled />
                            </button>
                            <button onClick={next} className={styles.btn2}>
                                <TbSquareRoundedArrowRightFilled />
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Hero