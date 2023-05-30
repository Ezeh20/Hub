import { useParams } from "react-router"
import requestApi from "../../api/tmdb_api_config"
import { useEffect, useState } from "react"
import TvHero from "./Tv_hero_section/tv_hero"

const TvDetails = () => {
  const { uid } = useParams()
  const [result, setResult] = useState<object>({})
  const [iframeKey, setIframeKey] = useState('')
  const [show, setShow] = useState(false)


  useEffect(() => {
    const tvDetails = async () => {
      try {
        const { data } = await requestApi.tvDetails(Number(uid))
        setResult(data)
      } catch (error) {
        //ignore
      }
    }
    tvDetails()
  }, [uid])

  const {
    id
  }: any = result

  return (
    <>
      {
        id &&
        <>
          <TvHero />
        </>
      }
    </>
  )
}

export default TvDetails