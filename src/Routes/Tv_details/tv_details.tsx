import { useLocation } from "react-router"
import requestApi from "../../api/tmdb_api_config"
import { useEffect, useState } from "react"


const TvDetails = () => {
  const location = useLocation()
  const { state } = location

  useEffect(() => {
    const tvDetails = async () => {
      try {
        const { data } = await requestApi.tvDetails(state)
        console.log(data)
      } catch (error) {

      }
    }
    tvDetails()
  }, [])
  return (
    <div>Tv 1</div>
  )
}

export default TvDetails