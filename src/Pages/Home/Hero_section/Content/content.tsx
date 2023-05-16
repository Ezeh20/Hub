import { Circle } from 'rc-progress';
import apiConfig from '../../../../api/api_config'
import styles from './content.module.scss'
import Rating from '../../../../Components/Rating/rating';

type Props = {
    rating: number,
    original_title: string,
    poster_path: string,
    overview: string,
    release_date: string
}

const Info = (props: Props) => {
    const { poster_path, rating, original_title, overview, release_date } = props
    return (
        <div className={styles.content}>
            <img src={apiConfig.small(poster_path)} alt="poster" className={styles.poster} />
            <div className={styles.Info}>
                <div className={styles.rating}>
                    <Rating rating={rating} />
                    <p className={styles.percentage}>
                        {rating.toFixed(0)}
                        <span className={styles.per}>%</span>
                    </p>
                </div>
                <p>{original_title}</p>
                <p>{overview}</p>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Info