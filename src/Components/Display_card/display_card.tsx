import { useContext, useEffect, useState } from 'react';
import apiConfig from '../../api/api_config'
import Rating from '../Rating/rating'
import styles from './display_card.module.scss'
import { IoIosPeople } from "react-icons/io";
import requestApi from '../../api/tmdb_api_config';
import { useNavigate } from 'react-router';
import { CurrentIdContext } from '../../Context/current_id_context/current_id';
import { motion } from 'framer-motion'


type Display = {
    result: [],
    varient?: string | any,
    typeOfMedia?: string
}


type Items = {
    id: number,
    original_title: string,
    vote_average: number,
    poster_path: string,
    popularity: number,
    name: string,
    genre_ids: [],
    media_type: string,
    profile_path: string,
    file_path: string
}

type Filter = {
    id: number,
    name: string
}
const DisplayCard = (props: Display) => {
    const { result, varient, typeOfMedia } = props
    const [genre, setGenre] = useState<[]>([])
    const nav = useNavigate()
    const { setShow } = useContext(CurrentIdContext)

    useEffect(() => {
        const genre = async () => {
            const req = requestApi.movieGenres('')
            const { genres } = await (await req).data
            setGenre(genres)
        }
        genre()
    }, [])

    const navFunction = (media: string, id: number) => {
        typeOfMedia ? nav(`/${typeOfMedia}/${id}`)
            : nav(`/${media}/${id}`)
        setShow(false)
    }

    return (
        <div className={`${styles.card} ${styles[varient]}`}>
            {
                result && result.map((itm, idx) => {
                    const {
                        id,
                        original_title,
                        vote_average,
                        poster_path,
                        popularity,
                        genre_ids,
                        media_type,
                        profile_path,
                        file_path,
                        name
                    }: Items = itm
                    const lists: [] = []
                    genre_ids && genre_ids.forEach((e: number) => {
                        genre && genre.filter((itm: Filter) => itm.id === e)
                            .map(itm => lists.push(itm))
                    })

                    return (
                        <motion.div
                            initial={{ y: varient ? 100 : -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: .5, delay: idx * .1, type: 'spring', stiffness: 100 }}
                            viewport={{ once: true }}
                            key={idx}>
                            {
                                media_type === 'person' || typeOfMedia === 'person' ?

                                    (<div className={`${styles.displayCard} 
                                    ${media_type || typeOfMedia === 'person' && styles.person}
                                    cardBg`} onClick={() => navFunction(media_type, id)}>
                                        <img src={profile_path || file_path ? apiConfig.small(profile_path || file_path)
                                            : '/public/no-img.jpg'} alt="img" className={styles.imgCard} />
                                        <div className={styles.overlay}>
                                            <div className={styles.info}>
                                                <p className={styles.popular}>
                                                    {popularity && <IoIosPeople className={styles.people} />}
                                                    {popularity && popularity.toFixed(0)}
                                                </p>
                                                <p className={styles.title}>{name}</p>
                                            </div>
                                        </div>
                                    </div>)

                                    : typeOfMedia === 'personAlt' ?
                                        (<div className={`${styles.displayCard} 
                                    ${typeOfMedia === 'personAlt' && styles.person}
                                    cardBg`}>
                                            <img src={profile_path || file_path ? apiConfig.small(profile_path || file_path)
                                                : '/public/no-img.jpg'} alt="img" className={styles.imgCard} />
                                            <div className={styles.overlay}>
                                                <div className={styles.info}>
                                                    <p className={styles.popular}>
                                                        {popularity && <IoIosPeople className={styles.people} />}
                                                        {popularity && popularity.toFixed(0)}
                                                    </p>
                                                    <p className={styles.title}>{name}</p>
                                                </div>
                                            </div>
                                        </div>)

                                        : (<div className={`${styles.displayCard} cardBg`} onClick={() => navFunction(media_type, id)}>
                                            <img src={poster_path ? apiConfig.small(poster_path)
                                                : '/public/no-img.jpg'} alt="img" className={styles.imgCard} />
                                            <div className={styles.overlay}>
                                                <div className={styles.ratings}>
                                                    <Rating rating={vote_average} />
                                                </div>
                                                <div className={styles.info}>
                                                    <p className={styles.popular}>
                                                        <IoIosPeople className={styles.people} />
                                                        {popularity.toFixed(0)}
                                                    </p>
                                                    {
                                                        original_title
                                                            ? <p className={styles.title}>{original_title}</p>
                                                            : <p className={styles.title}>{name}</p>
                                                    }
                                                    <div className={styles.genre}>
                                                        {
                                                            lists.map((itm, idx) => {
                                                                const { name } = itm
                                                                return (
                                                                    <div key={idx} className={styles.lis}>
                                                                        {name}
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)
                            }
                        </motion.div>
                    )
                })
            }
        </div>
    )
}

export default DisplayCard