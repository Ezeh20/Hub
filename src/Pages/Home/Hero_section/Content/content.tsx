import { Circle } from 'rc-progress';
import apiConfig from '../../../../api/api_config'
import styles from './content.module.scss'

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
                <p>{original_title}</p>
                <p>{overview}</p>
                <p>{release_date}</p>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Info