import { useContext, useEffect, useState } from 'react'
import requestApi from '../../api/tmdb_api_config'
import DisplayCard from '../../Components/Display_card/display_card'
import Container from '../../Components/Container/container'
import styles from './people.module.scss'
import LoadPage from '../../Components/LoadPage/loadpage'
import { PageCountContext } from '../../Context/Presist_page/presist_page'
import Footer from '../../Layout/Footer/footer'

const People = () => {
    const [result, setResult] = useState<[]>([])
    const [totalPages, setTotalPages] = useState<number>(0)

    const { page, setPage } = useContext(PageCountContext)


    useEffect(() => {
        const person = async () => {
            try {
                const { data } = await requestApi.people(page)
                setResult(data.results)
                setTotalPages(data.total_pages)

            } catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
            }
        }
        person()
    }, [page])
    return (
        <Container>
            <div className={styles.people}>
                <DisplayCard result={result} varient='general' typeOfMedia='person' />
            </div>
            <LoadPage totalPages={totalPages} page={page} setPage={setPage} />
            <Footer />
        </Container>
    )
}

export default People