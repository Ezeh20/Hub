import apiConfig from '../../api/api_config'
import Rating from '../Rating/rating'
import styles from './display_card.module.scss'
import { IoIosPeople } from "react-icons/io";

type Display = {
    trendingResult: []
}
type Items = {
    genre_ids: number,
    id: number,
    original_title: string,
    vote_average: number,
    poster_path: string,
    overview: string,
    popularity: number,
    release_date: number,
    name: string
}
const DisplayCard = (props: Display) => {
    const { trendingResult } = props
    return (
        <div className={styles.card}>
            {
                trendingResult && trendingResult.map(itm => {
                    const {
                        genre_ids,
                        id,
                        original_title,
                        vote_average,
                        poster_path,
                        overview,
                        popularity,
                        release_date,
                        name
                    }: Items = itm
                    const rating = vote_average * 10
                    return (
                        <div key={id} className={`${styles.displayCard} cardBg`}>
                            <img src={apiConfig.small(poster_path)} alt="img" className={styles.imgCard} />
                            <div className={styles.ratings}>
                                <Rating rating={rating} />
                            </div>
                            <div className={styles.info}>
                                <p className={styles.popular}>
                                    <IoIosPeople className={styles.people} />
                                    {popularity.toFixed(0)}
                                </p>
                                {
                                    original_title 
                                    ? <p className={styles.title}>{original_title}</p> 
                                    : <p  className={styles.title}>{name}</p>
                                }

                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayCard