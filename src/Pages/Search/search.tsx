import { useEffect, useState } from "react"
import Input from "../../Components/Input/input"
import Container from "../../Components/Container/container"
import requestApi from "../../api/tmdb_api_config"
import styles from './search.module.scss'

const Search = () => {

    const [search, setSearch] = useState<string>('')
    const [result, setResult] = useState<[]>([])
    const [page, setPage] = useState<number>(1)
    const [totalpages, setTotalPages] = useState<number>()

    console.log(result)
    useEffect(() => {
        const searchQuery = async () => {
            try {
                const { data } = await requestApi.search(search, page)
                console.log(data.total_pages)
                setResult(...result, data.results)
            } catch (error) {
                if (error instanceof Error)
                    throw new Error(error.message)
            }
        }
        searchQuery()
    }, [search])
    return (
        <div className={styles.search}>
            <Container>
                <Input setSearch={setSearch} />
            </Container>
        </div>
    )
}

export default Search