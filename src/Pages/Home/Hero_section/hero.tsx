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
        result,
        current,
        setCurrent
    } = props

    const [autoPlay, setAutoPlay] = useState<boolean>(true)
    const [genre, setGenre] = useState<[]>([])
    let play: any = null;


    useEffect(() => {
        play = autoPlay ? setTimeout(() => {
            next()
        }, 10000) : ''
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
    const top10 = result.slice(0, 10)
    //function to toggle the next showcase
    const next = () => {
        setCurrent(current === top10.length - 1 ? 0 : current + 1)
    }
    //function to toggle the prev showcase
    const prev = () => {
        setCurrent(current === 0 ? top10.length - 1 : current - 1)
    }

    return (
        <div className={styles.carousel}
            onMouseEnter={() => { setAutoPlay(false); clearTimeout(play) }}
            onMouseLeave={() => setAutoPlay(true)}>

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
                        name
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
                                        name={name}
                                    />
                                </Container>
                            </div>

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