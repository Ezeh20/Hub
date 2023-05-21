import { useEffect, useState } from "react"
import CardsWrapper from "../../../Components/Cards_wrapper/cards_wrapper"
import Container from "../../../Components/Container/container"
import DisplayCard from "../../../Components/Display_card/display_card"
import requestApi from "../../../api/tmdb_api_config"

const ComingSoon = () => {
    const [result, setResult] = useState<[]>([])

    useEffect(() => {
        const upComing = async () => {
            try {
                const { data } = await requestApi.movie('upcoming', 1)
                setResult(data.results)
            } catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);

                }
            }
        }
        upComing()
    }, [])
    return (
        <Container>
            <div className='HeadingsContainer'>
                <p className='Headings'>Coming soon</p>
                <span className='HeadingSub'>UpComing movies to see</span>
            </div>
            <CardsWrapper id='upComing'>
                <DisplayCard result={result} />
            </CardsWrapper>
        </Container>
    )
}

export default ComingSoon