import { useEffect, useState } from 'react'
import CardsWrapper from '../../../Components/Cards_wrapper/cards_wrapper'
import requestApi from '../../../api/tmdb_api_config'
import Container from '../../../Components/Container/container'
import DisplayCard from '../../../Components/Display_card/display_card'


const TvOnair = () => {
    const [result, setResult] = useState<[]>([])

    useEffect(() => {
        const onAir = async () => {
            try {
                const { data } = await requestApi.tv('top_rated', 1)
                setResult(data.results)

            } catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);

                }
            }
        }
        onAir()
    }, [])
    return (
        <Container>
            <div className='HeadingsContainer'>
                <p className='Headings'>Tv</p>
                <span className='HeadingSub'>Top rated series</span>
            </div>
            <CardsWrapper id='onAir'>
                <DisplayCard result={result} />
            </CardsWrapper>
        </Container>
    )
}

export default TvOnair