import { useEffect, useState } from 'react'
import requestApi from '../../api/tmdb_api_config'
import styles from './discover.module.scss'
import Genre from '../../Components/Genre_list/genre'
import LoadPage from '../../Components/LoadPage/loadpage'
import DisplayCard from '../Display_card/display_card'
import Footer from '../../Layout/Footer/footer'

type disCover = {
    mediaType: string
}

const Discover = ({ mediaType }: disCover) => {
    const [genre, setGenre] = useState<null>(null)
    const [result, setResult] = useState<[]>([])
    const [totalPages, setTotalPages] = useState<number>(0)

    const storage: any = localStorage.getItem(`CurrentPage${mediaType}`)
    const thePage = JSON.parse(storage)
    const [page, setPage] = useState<number>(thePage ?? 1)

    useEffect(() => {
        localStorage.setItem(`CurrentPage${mediaType}`, JSON.stringify(page))
    }, [thePage, page])


    useEffect(() => {
        const discover = async () => {
            try {
                const req = await requestApi.discover(mediaType, genre, page)
                const { results } = await req.data
                setTotalPages(req.data.total_pages)
                setResult(results)
            } catch (error) {
                //do nothing
            }
        }
        discover()
    }, [genre, page])


    return (
        <div className={styles.movie}>
            <Genre setGenre={setGenre} genre={genre} setPage={setPage} mediaType={mediaType} />
            <DisplayCard result={result} varient='general' typeOfMedia={mediaType} />
            <LoadPage totalPages={totalPages} setPage={setPage}
                page={page} />
            <Footer />
        </div>
    )
}

export default Discover