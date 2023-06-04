import { useEffect, useState } from 'react'
import requestApi from '../../api/tmdb_api_config'
import DisplayCard from '../Display_card/display_card'
import CardsWrapper from '../Cards_wrapper/cards_wrapper'
import { useParams } from 'react-router'
import Loading from '../Loading-spinner/loading'

type Type = {
    media: string,
}

const Credits = ({ media }: Type) => {
    const { uid } = useParams()
    const [isLoading, setIsLoading] = useState<{}>({})
    const [results, setResults] = useState<[]>([])

    useEffect(() => {
        const casts = async () => {
            try {
                if (Number(uid)) {
                    const { data } = await requestApi.mediaInfo(media, Number(uid), 'credits')
                    setIsLoading(data)
                    setResults(data.cast)
                }
            } catch (error) {

            }
        }
        casts()
    }, [uid])

    const len = Object.keys(isLoading)
    return (
        <div>
            {
                len.length > 0 ?
                    <div>
                        {
                            results && results.length > 0 ? <CardsWrapper id='casts'>
                                <DisplayCard result={results} typeOfMedia='person' />
                            </CardsWrapper> : 'No cast'
                        }
                    </div> : <Loading />
            }
        </div>
    )
}

export default Credits