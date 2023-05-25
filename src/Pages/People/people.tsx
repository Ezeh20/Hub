import { useEffect, useState } from 'react'
import requestApi from '../../api/tmdb_api_config'
import DisplayCard from '../../Components/Display_card/display_card'
import Container from '../../Components/Container/container'


const People = () => {
    const [result, setResult] = useState<[]>([])

    useEffect(() => {
        const person = async () => {
            try {
                const { data } = await requestApi.people()
                setResult(data.results)
                console.log(data.results);

            } catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
            }
        }
        person()
    }, [])
    return (
        <Container>
            <DisplayCard result={result} varient='general' typeOfMedia='person'/>
        </Container>
    )
}

export default People