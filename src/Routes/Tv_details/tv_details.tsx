import { useLocation, useParams } from "react-router"
import requestApi from "../../api/tmdb_api_config"
import { useContext, useEffect } from "react"
import { MediaIdContext } from '../../Context/current_id_context/current_id'


const TvDetails = () => {
  const location = useLocation()
  const { uid } = useParams()
  const { state } = location
  const { setMediaId } = useContext(MediaIdContext)

  setMediaId(Number(uid))

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