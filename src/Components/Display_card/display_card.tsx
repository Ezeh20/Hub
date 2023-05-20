import apiConfig from '../../api/api_config'
import Rating from '../Rating/rating'
import styles from './display_card.module.scss'
import { IoIosPeople } from "react-icons/io";

type Display = {
    result: []
}
type Items = {
    id: number,
    original_title: string,
    vote_average: number,
    poster_path: string,
    popularity: number,
    name: string
}
const DisplayCard = (props: Display) => {
    const { result } = props
    return (
        <div className={styles.card}>
            {
                result && result.map(itm => {
                    const {
                        id,
                        original_title,
                        vote_average,
                        poster_path,
                        popularity,
                        name
                    }: Items = itm
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
                                        {popularity.toFixed(0)}
                                    </p>
                                    {
                                        original_title
                                            ? <p className={styles.title}>{original_title}</p>
                                            : <p className={styles.title}>{name}</p>
                                    }

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