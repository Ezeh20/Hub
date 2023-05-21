import React, { useEffect, useState } from 'react'
import requestApi from '../../api/tmdb_api_config'


const PeopleCard = () => {
  const [result, setResult] = useState<[]>([])

  console.log(result)
  useEffect(() => {
    const person = async () => {
      try {
        const { data } = await requestApi.people()
        setResult(data.results)
      } catch (error) {
        if (error instanceof  Error) {
          throw new Error(error.message);
        }
      }
    }
    person()
  }, [])
  return (
    <div>PeopleCard</div>
  )
}

export default PeopleCard