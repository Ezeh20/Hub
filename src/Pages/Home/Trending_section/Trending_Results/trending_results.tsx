import CardsWrapper from '../../../../Components/Cards_wrapper/cards_wrapper'
import DisplayCard from '../../../../Components/Display_card/display_card'
import styles from './trending_results.module.scss'

type Result = {
    result: []
}

const TrendingResults = (props: Result) => {
    const { result } = props

    return (
        <div className={styles.TrendingResults}>
            <CardsWrapper id='trending'>
                <DisplayCard result={result} />
            </CardsWrapper>
        </div>
    )
}

export default TrendingResults