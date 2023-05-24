import { Circle } from 'rc-progress';
import styles from './rating.module.scss'
type rating = {
    rating: number
}

const Rating = ({ rating }: rating) => {

    return (
        <div className={styles.rating}>
            <Circle percent={rating ? rating : 0} strokeWidth={10} trailWidth={10}
                strokeColor={
                    rating <= 49 ? 'red'
                        : rating <= 69
                            ? '#FFB84C'
                            : '#21d07a'}
                style={{
                    width: '50px', height: '50px',
                }} />
            <p className={styles.percentage}>
                {rating ? rating.toFixed(0) : 0}
                <span className={styles.cent}>%</span>
            </p>
        </div>
    )
}



export default Rating