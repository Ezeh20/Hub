import styles from './top_movies.module.scss'
import Container from "../../../Components/Container/container"
import requestApi from '../../../api/tmdb_api_config'
import DisplayCard from '../../../Components/Display_card/display_card'
import { useEffect, useState } from 'react'
import CardsWrapper from '../../../Components/Cards_wrapper/cards_wrapper'


const TopMovies = () => {
    const [result, setResult] = useState<[]>([])

    useEffect(() => {
        const TopMovies = async () => {
            try {
                const { data } = await requestApi.movie('top_rated', 1)
                setResult(data.results)
            } catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message)
                }
            }
        }
        TopMovies()
    }, [])



    return (
        <Container>
            <div className='HeadingsContainer'>
                <p className='Headings'>Top rated</p>
                <span className='HeadingSub'>Top movies to watch</span>
            </div>
            <CardsWrapper>
                <DisplayCard result={result} />
            </CardsWrapper>
        </Container>
    )
}

export default TopMovies