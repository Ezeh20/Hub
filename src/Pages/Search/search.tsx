import { useEffect, useState } from "react"
import Input from "../../Components/Input/input"
import Container from "../../Components/Container/container"
import requestApi from "../../api/tmdb_api_config"
import styles from './search.module.scss'
import LoadPage from "../../Components/LoadPage/loadpage"
import DisplayCard from "../../Components/Display_card/display_card"
import Animated from "../../Components/AnimatedRoutes/animated"
import Footer from "../../Layout/Footer/footer"

const Search = () => {

    const [search, setSearch] = useState<string>('')
    const [result, setResult] = useState<[]>([])
    const [page, setPage] = useState<number>(1)
    const [totalpages, setTotalPages] = useState<number>(0)

    useEffect(() => {
        const searchQuery = async () => {
            try {
                const req = await requestApi.search(search, page)
                const { results } = await req.data
                setTotalPages(req.data.total_pages)
                setResult(results)
            } catch (error) {
                if (error instanceof Error)
                    throw new Error(error.message)
            }
        }
        searchQuery()
    }, [search, page])
    return (
        <div className={styles.searchContainer}>
            <Animated>
                <div className={styles.search}>
                    <Container>
                        <Input setSearch={setSearch} />
                        <DisplayCard result={result} varient='general' />

                        {
                            result.length > 0 && <LoadPage page={page} setPage={setPage} totalPages={totalpages} />
                        }
                    </Container>
                </div>
            </Animated>
            <Footer />
        </div>
    )
}

export default Search