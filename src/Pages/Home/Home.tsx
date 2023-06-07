import { lazy, useEffect, useState } from "react"
import requestApi from "../../api/tmdb_api_config"
import styles from './home.module.scss'
import Animated from "../../Components/AnimatedRoutes/animated"
import Footer from "../../Layout/Footer/footer"

const Hero = lazy(() => import("./Hero_section/hero"))
const Trending = lazy(() => import("./Trending_section/trending"))
const TopMovies = lazy(() => import("./Top_movies/top_movies"))
const TvOnair = lazy(() => import("./Tv/tv_onair"))
const ComingSoon = lazy(() => import("./Coming_soon/coming_soon"))


const Home = () => {
  const [trending, setTrending] = useState<string>('movie')
  const [trendingPeriod, setTrendingPeriod] = useState<string>('day')
  const [result, setResult] = useState<[]>([])
  const [current, setCurrent] = useState<number>(0)

  useEffect(() => {
    const Trending = async () => {
      try {
        const { data } = await requestApi.trending(trending, trendingPeriod)
        setResult(data.results)
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
      <Animated home="home">
        <Hero
          result={result}
          current={current} setCurrent={setCurrent}
        />
        <Trending
          trending={trending} setTrending={setTrending}
          trendingPeriod={trendingPeriod} setTrendingPeriod={setTrendingPeriod}
          result={result}
        />
        <TopMovies />
        <TvOnair />
        <ComingSoon />
      </Animated>
      <Footer />
    </div>
  )
}

export default Home