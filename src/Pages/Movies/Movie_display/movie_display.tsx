import DisplayCard from '../../../Components/Display_card/display_card'
import styles from './movie_display.module.scss'

type Display = {
    result: []
}

const MovieDisplay = ({ result }: Display) => {

    return (
        <div className={styles.movieS}>
            <DisplayCard result={result}  varient={`general`}/>
        </div>
    )
}

export default MovieDisplay