import { useEffect, useState } from 'react'
import Container from '../../../Components/Container/container'
import DisplayCard from '../../../Components/Display_card/display_card'
import requestApi from '../../../api/tmdb_api_config'

type Types = {
    id: number
}

const KnownFor = ({ id }: Types) => {
    const [result, setResult] = useState<[]>([])

    useEffect(() => {
        const credits = async () => {
            try {
                if (id) {
                    const { data } = await requestApi.peopleCredits(id)
                    setResult(data.cast)
                }
            } catch (error) {
                //do nothin for now
            }
        }
        credits()
    }, [id])
    return (
        <div>
            <Container variant={true}>
                <DisplayCard result={result} varient='general' />
            </Container>
        </div>
    )
}

export default KnownFor