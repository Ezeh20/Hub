import { useEffect, useState } from 'react'
import requestApi from '../../api/tmdb_api_config'
import DisplayCard from '../Display_card/display_card'
import CardsWrapper from '../Cards_wrapper/cards_wrapper'
import Loading from '../Loading-spinner/loading'
import { useParams } from 'react-router'

type Types = {
    media: string,
}

const Recommended = ({ media }: Types) => {
    const {uid} = useParams()
    const [isLoading, setIsLoading] = useState<{}>({})
    const [result, setResult] = useState<[]>([])

    useEffect(() => {
        const Similar = async () => {
            try {
                if (Number(uid)) {
                    const { data } = await requestApi.mediaInfo(media, Number(uid), 'recommendations')
                    setIsLoading(data)
                    setResult(data.results)
                }

            } catch (error) {
                //do nothing fo now
            }
        }
        Similar()
    }, [uid])

    const len = Object.keys(isLoading)
    return (
        <div>
            {
                len.length > 0 ?
                    <div>
                        {
                            result && result.length > 0 ? <CardsWrapper id='similar'>
                                <DisplayCard result={result} />
                            </CardsWrapper> : 'None for now'
                        }
                    </div> : <Loading />
            }
        </div>
    )
}

export default Recommended