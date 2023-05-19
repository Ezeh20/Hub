import { useState } from 'react'
import Container from '../../../Components/Container/container'
import styles from './trending.module.scss'
const options = ['movie', 'tv']
const optionsDuration = ['week', 'day']

const Trending = () => {
    const [opt, setOpt] = useState<string>('movie')
    const [duration, setDuration] = useState<string>('week')
    return (
        <div className={styles.trending}>
            <Container>
                <div className={styles.trendingContainer}>
                    <div className={styles.Top}>
                        <p className='Headings'>Trending</p>
                        <div className={styles.select}>
                            <div className={`${styles.selectTrending}`}>
                                {
                                    options.map((itm, idx) => {
                                        return (
                                            <button key={idx} onClick={() => setOpt(itm)} className={opt === itm
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
                                            <button key={idx} onClick={() => setDuration(itm)} className={duration === itm
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
                </div>
            </Container>
        </div>
    )
}

export default Trending