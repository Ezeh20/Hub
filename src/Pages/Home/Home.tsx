import { useEffect } from "react"
import requestApi, { moviePath } from "../../api/tmdb_api_config"


const Home = () => {

  const myF = async () => {
    try {
      const req = await requestApi.movie(moviePath.popular, 5)
      console.log(req)
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
    }
  }
  useEffect(() => {
    myF()
  }, [])

  return (
    <div className="cc">
      home
    </div>
  )
}

export default Home