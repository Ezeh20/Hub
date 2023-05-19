import { useEffect, useState } from "react"
import requestApi from "../../api/tmdb_api_config"
import styles from './home.module.scss'
import Hero from "./Hero_section/hero"
import Trending from "./Trending_section/trending"


const Home = () => {
  const [trending, setTrending] = useState<string>('movie')
  const [trendingPeriod, setTrendingPeriod] = useState<string>('day')
  const [trendingResult, setTrendingResult] = useState<[]>([])
  const [current, setCurrent] = useState<number>(0)

  useEffect(() => {
    const Trending = async () => {
      try {
        const { data } = await requestApi.trending(trending, trendingPeriod)
        setTrendingResult(data.results)
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message)
        }
      }
    }
    Trending()
  }, [trending, trendingPeriod])


  return (
    <div className={styles.home}>
      <Hero
        trendingResult={trendingResult}
        current={current} setCurrent={setCurrent}
      />
      <Trending />
    </div>
  )
}

export default Home