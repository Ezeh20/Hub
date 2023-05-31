import { useEffect, useState } from 'react'
import requestApi from '../../../../api/tmdb_api_config'
import DisplayCard from '../../../../Components/Display_card/display_card'
import CardsWrapper from '../../../../Components/Cards_wrapper/cards_wrapper'

type Types = {
    id: number,
    setShow: any
}

const Recommended = ({ id, setShow }: Types) => {

    const [result, setResult] = useState<[]>([])

    useEffect(() => {
        const Similar = async () => {
            try {
                if (id) {
                    const { data } = await requestApi.movieInfo(id, 'recommendations')
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
                <DisplayCard result={result} setShow={setShow} />
            </CardsWrapper>
        </div>
    )
}

export default Recommended