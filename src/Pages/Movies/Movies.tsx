import { useEffect, useState } from 'react'
import Container from '../../Components/Container/container'
import requestApi from '../../api/tmdb_api_config'
import styles from './movie.module.scss'
import Genre from '../../Components/Genre_list/genre'
import MovieDisplay from './Movie_display/movie_display'
import LoadPage from '../../Components/LoadPage/loadpage'

const Movies = () => {
  const [genre, setGenre] = useState<null>(null)
  const [result, setResult] = useState<[]>([])
  const [page, setPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(0)


  useEffect(() => {
    const discover = async () => {
      try {
        const req = await requestApi.discover('movie', genre, page)
        const { results } = await req.data
        setTotalPages(req.data.total_pages)
        setResult(results)
      } catch (error) {
        if (error instanceof Error)
          throw new Error(error.message)
      }
    }
    discover()
  }, [genre, page])


  return (
    <Container>
      <div className={styles.movie}>
      </div>
      <Genre setGenre={setGenre} genre={genre} />
      <MovieDisplay result={result} />
      <LoadPage totalPages={totalPages} setPage={setPage}
        page={page} />
    </Container >
  )
}

export default Movies