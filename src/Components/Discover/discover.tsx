import { useEffect, useState } from 'react'
import requestApi from '../../api/tmdb_api_config'
import styles from './discover.module.scss'
import Genre from '../../Components/Genre_list/genre'
import LoadPage from '../../Components/LoadPage/loadpage'
import DisplayCard from '../Display_card/display_card'

type disCover = {
    mediaType: string
}

const Discover = ({ mediaType }: disCover) => {
    const [genre, setGenre] = useState<null>(null)
    const [result, setResult] = useState<[]>([])
    const [page, setPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(0)


    useEffect(() => {
        const discover = async () => {
            try {
                const req = await requestApi.discover(mediaType, genre, page)
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
        <div className={styles.movie}>
            <Genre setGenre={setGenre} genre={genre} setPage={setPage} mediaType={mediaType} />
            <DisplayCard result={result} varient='general' typeOfMedia={mediaType}/>
            <LoadPage totalPages={totalPages} setPage={setPage}
                page={page} />
        </div>
    )
}

export default Discover