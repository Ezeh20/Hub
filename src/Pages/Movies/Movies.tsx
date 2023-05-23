import { useEffect, useState } from 'react'
import Container from '../../Components/Container/container'
import requestApi from '../../api/tmdb_api_config'
import styles from './movie.module.scss'
import Input from '../../Components/Input/input'

const Movies = () => {
  const [genre, setGenre] = useState<null>(null)
  const [result, setResult] = useState<[]>([])


  useEffect(() => {
    const discover = async () => {
      try {
        const { data } = await requestApi.discover('movie', genre)
        setResult(data.results)
      } catch (error) {
        if (error instanceof Error)
          throw new Error(error.message)
      }
    }
    discover()
  }, [genre])


  return (
    <Container>
      <div className={styles.movie}>
        <Input placeholder='search for a movie' setResult={setResult}
          mediaType='movie' />
      </div>
    </Container>
  )
}

export default Movies