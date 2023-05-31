import { useEffect, useState } from 'react'
import requestApi from '../../api/tmdb_api_config'
import DisplayCard from '../Display_card/display_card'
import CardsWrapper from '../Cards_wrapper/cards_wrapper'

type Type = {
    media: string,
    id: number
}

const Credits = ({ media, id }: Type) => {
    const [results, setResults] = useState<[]>([])

    useEffect(() => {
        const casts = async () => {
            try {
                if (id) {
                    const { data } = await requestApi.mediaInfo(media, id, 'credits')
                    setResults(data.cast)
                }
            } catch (error) {

            }
        }
        casts()
    }, [id])
    return (
        <div>
            <CardsWrapper id='casts'>
                <DisplayCard result={results} typeOfMedia='person' />
            </CardsWrapper>
        </div>
    )
}

export default Credits