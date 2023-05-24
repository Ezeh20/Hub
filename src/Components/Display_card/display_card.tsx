import { useEffect, useState } from 'react';
import apiConfig from '../../api/api_config'
import Rating from '../Rating/rating'
import styles from './display_card.module.scss'
import { IoIosPeople } from "react-icons/io";
import requestApi from '../../api/tmdb_api_config';


type Display = {
    result: [],
    varient?: string|any
}
type Items = {
    id: number,
    original_title: string,
    vote_average: number,
    poster_path: string,
    popularity: number,
    name: string,
    genre_ids: []
}

type Filter = {
    id: number,
    name: string
}
const DisplayCard = (props: Display) => {
    const { result, varient } = props
    const [genre, setGenre] = useState<[]>([])

    useEffect(() => {
        const genre = async () => {
            const req = requestApi.movieGenres('')
            const { genres } = await (await req).data
            setGenre(genres)
        }
        genre()
    }, [])

    return (
        <div className={`${styles.card} ${styles[varient]}`}>
            {
                result && result.map(itm => {
                    const {
                        id,
                        original_title,
                        vote_average,
                        poster_path,
                        popularity,
                        genre_ids,
                        name
                    }: Items = itm
                    const lists: [] = []
                    genre_ids && genre_ids.forEach((e: number) => {
                        genre && genre.filter((itm: Filter) => itm.id === e)
                            .map(itm => lists.push(itm))
                    })

                    const rating = vote_average * 10
                    return (
                        <div key={id} className={`${styles.displayCard} cardBg`}>
                            <img src={apiConfig.small(poster_path)} alt="img" className={styles.imgCard} />
                            <div className={styles.overlay}>
                                <div className={styles.ratings}>
                                    <Rating rating={rating} />
                                </div>
                                <div className={styles.info}>
                                    <p className={styles.popular}>
                                        <IoIosPeople className={styles.people} />
                                        
                                    </p>
                                    {
                                        original_title
                                            ? <p className={styles.title}>{original_title}</p>
                                            : <p className={styles.title}>{name}</p>
                                    }
                                    <div className={styles.genre}>
                                        {
                                            lists.map(itm => {
                                                const { id, name } = itm
                                                return (
                                                    <div key={id} className={styles.lis}>
                                                        {name}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayCard