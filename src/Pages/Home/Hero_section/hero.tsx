/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react"
import apiConfig from "../../../api/api_config"
import styles from './hero.module.scss'
import Container from "../../../Components/Container/container"
import { TbSquareRoundedArrowLeftFilled, TbSquareRoundedArrowRightFilled } from "react-icons/tb";
import { Circle } from 'rc-progress';

type heroType = {
    trendingResult: [],
    current: number,
    setCurrent: React.Dispatch<React.SetStateAction<number>>
}

const Hero = (props: heroType) => {
    const {
        trendingResult,
        current,
        setCurrent
    } = props

    const [autoPlay, setAutoPlay] = useState<boolean>(true)
    let play: any = null;

    useEffect(() => {
        play = autoPlay && setTimeout(() => {
            next()
        }, 5000)
    })
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

    return (
        <div className={styles.carousel}
            onMouseEnter={() => { setAutoPlay(false); clearTimeout(play) }}
            onMouseLeave={() => setAutoPlay(true)}
        >
            <button onClick={prev} className={styles.btn}>
                <TbSquareRoundedArrowLeftFilled />
            </button>
            <button onClick={next} className={styles.btn2}>
                <TbSquareRoundedArrowRightFilled />
            </button>
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
                        release_date
                    } = item
                    const rating = vote_average * 10
                    return (
                        <div key={id} className={idx === current ? `${styles.hero} ${styles.heroActive}` : `${styles.hero}`}>
                            <img src={apiConfig.originalImg(backdrop_path)} alt="backdrop" className={styles.backDrop}
                            />
                            <div className={styles.overlay}>
                                <Container>
                                    <div className={styles.content}>
                                        <img src={apiConfig.small(poster_path)} alt="poster" className={styles.poster} />
                                        <div className={styles.Info}>
                                            <p>{original_title}</p>
                                            <div className={styles.rating}>
                                                <Circle percent={rating} strokeWidth={10}
                                                    strokeColor={rating <= 49 ? 'red'
                                                        : rating <= 69
                                                            ? '#227C70'
                                                            : rating <= 79
                                                                ? '#21d07a'
                                                                : '#FFB84C'}
                                                    style={{
                                                        width: '50px', height: '50px'
                                                    }} />
                                                <p className={styles.percentage}>
                                                    {rating.toFixed(0)}
                                                    <span className={styles.per}>%</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Container>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Hero