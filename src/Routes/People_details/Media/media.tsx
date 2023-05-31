import { useEffect, useState } from 'react'
import requestApi from '../../../api/tmdb_api_config'
import DisplayCard from '../../../Components/Display_card/display_card'
import Container from '../../../Components/Container/container'

type Type = {
    id: number
}

const Media = ({ id }: Type) => {
    const [result, setResult] = useState<[]>([])

    useEffect(() => {
        const media = async () => {
            try {
                if (id) {
                    const { data } = await requestApi.peopleImg(id)
                    setResult(data.profiles)
                }
            } catch (error) {
                //do nothing for now
            }
        }
        media()
    }, [])
    return (
        <Container variant={true}>
            <DisplayCard result={result} varient='general' typeOfMedia='personAlt' />
        </Container>
    )
}

export default Media