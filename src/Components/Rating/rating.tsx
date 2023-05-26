import { Circle } from 'rc-progress';
import styles from './rating.module.scss'
type rating = {
    rating: number
}

const Rating = ({ rating }: rating) => {

    const ratingBase = rating * 10
    return (
        <div className={styles.rating}>
            <Circle percent={ratingBase ? ratingBase : 0} strokeWidth={10} trailWidth={10}
                strokeColor={
                    ratingBase <= 49 ? 'red'
                        : ratingBase <= 69
                            ? '#FFB84C'
                            : '#21d07a'}
                style={{
                    width: '50px', height: '50px',
                }} />
            <p className={styles.percentage}>
                {ratingBase ? ratingBase.toFixed(0) : 0}
                <span className={styles.cent}>%</span>
            </p>
        </div>
    )
}



export default Rating