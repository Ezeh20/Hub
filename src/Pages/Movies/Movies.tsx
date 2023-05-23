import { useEffect, useState } from 'react'
import Container from '../../Components/Container/container'
import requestApi from '../../api/tmdb_api_config'
import styles from './movie.module.scss'
import Input from '../../Components/Input/input'
import Genre from '../../Components/Genre_list/genre'
import MovieDisplay from './Movie_display/movie_display'

const Movies = () => {
  const [genre, setGenre] = useState<null>(null)
  const [result, setResult] = useState<[]>([])
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    const discover = async () => {
      try {
        const { data } = await requestApi.discover('movie', genre, page)
        setResult(data.results)
      } catch (error) {
        if (error instanceof Error)
          throw new Error(error.message)
      }
    }
    discover()
  }, [genre,page])


  return (
    <Container>
      <div className={styles.movie}>
        <Input placeholder='search for a movie' setResult={setResult}
          page={page}
          mediaType='movie' />
      </div>
      <Genre setGenre={setGenre} genre={genre} />
      <MovieDisplay result={result} />
      <button onClick={() => setPage(pre => pre + 1)}>Press</button>
    </Container>
  )
}

export default Movies