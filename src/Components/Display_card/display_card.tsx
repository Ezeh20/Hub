import apiConfig from '../../api/api_config'
import Rating from '../Rating/rating'
import styles from './display_card.module.scss'

type Display = {
    trendingResult: []
}
const DisplayCard = (props: Display) => {
    const { trendingResult } = props
    return (
        <div>
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
                    } = itm
                    const rating = vote_average * 10
                    return (
                        <div key={id} className={styles.displayCard}>
                            <img src={apiConfig.small(poster_path)} alt="img" />
                            <Rating rating={rating} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayCard