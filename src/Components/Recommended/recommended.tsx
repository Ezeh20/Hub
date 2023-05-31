import { useEffect, useState } from 'react'
import requestApi from '../../api/tmdb_api_config'
import DisplayCard from '../Display_card/display_card'
import CardsWrapper from '../Cards_wrapper/cards_wrapper'

type Types = {
    media: string,
    id: number
}

const Recommended = ({ media, id }: Types) => {

    const [result, setResult] = useState<[]>([])

    useEffect(() => {
        const Similar = async () => {
            try {
                if (id) {
                    const { data } = await requestApi.mediaInfo(media, id, 'recommendations')
                    setResult(data.results)
                }

            } catch (error) {
                //do nothing fo now
            }
        }
        Similar()
    }, [id])

    return (
        <div>
            <CardsWrapper id='similar'>
                <DisplayCard result={result} />
            </CardsWrapper>
        </div>
    )
}

export default Recommended