import DisplayCard from '../../../../Components/Display_card/display_card'
import styles from './trending_results.module.scss'

type Result = {
    trendingResult: []
}

const TrendingResults = (props: Result) => {
    const { trendingResult } = props

    return (
        <div className={styles.TrendingResults}>
            <div>
                <DisplayCard trendingResult={trendingResult} />
            </div>
        </div>
    )
}

export default TrendingResults