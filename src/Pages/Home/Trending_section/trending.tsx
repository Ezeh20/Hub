import Container from '../../../Components/Container/container'
import TrendingResults from './Trending_Results/trending_results'
import styles from './trending.module.scss'
const options = ['movie', 'tv']
const optionsDuration = ['week', 'day']

type Trending = {
    trending: string,
    setTrending: React.Dispatch<React.SetStateAction<string>>,
    trendingPeriod: string,
    setTrendingPeriod: React.Dispatch<React.SetStateAction<string>>,
    result: []
}

const Trending = (props: Trending) => {
    const {
        trending,
        setTrending,
        trendingPeriod,
        setTrendingPeriod,
        result
    } = props


    return (
        <div className={styles.trending}>
            <Container>
                <div className={styles.trendingContainer}>
                    <div className={styles.Top}>
                        <div className='HeadingsContainer'>
                            <p className='Headings'>Trending</p>
                            <span className='HeadingSub'>Top trending shows</span>
                        </div>
                        <div className={styles.select}>
                            <div className={`${styles.selectTrending}`}>
                                {
                                    options.map((itm, idx) => {
                                        return (
                                            <button key={idx} onClick={() => setTrending(itm)} className={trending === itm
                                                ? `${styles.TrendingOption}  ${styles.TrendingOptionActive}`
                                                : `${styles.TrendingOption}`}>
                                                {itm}
                                            </button>
                                        )
                                    })
                                }
                            </div>
                            <div className={styles.period}>
                                {
                                    optionsDuration.map((itm, idx) => {
                                        return (
                                            <button key={idx} onClick={() => setTrendingPeriod(itm)} className={trendingPeriod === itm
                                                ? `${styles.DurationOption}  ${styles.DurationOptionActive}`
                                                : `${styles.DurationOption}`}>
                                                {itm}
                                            </button>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <TrendingResults result={result} />
                </div>
            </Container>
        </div>
    )
}

export default Trending