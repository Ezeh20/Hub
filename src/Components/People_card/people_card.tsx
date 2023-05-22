import { useEffect, useState } from 'react'
import requestApi from '../../api/tmdb_api_config'
import apiConfig from '../../api/api_config'
import styles from './people_card.module.scss'


const PeopleCard = () => {
  const [result, setResult] = useState<[]>([])

  useEffect(() => {
    const person = async () => {
      try {
        const { data } = await requestApi.people()
        setResult(data.results)
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        }
      }
    }
    person()
  }, [])
  return (
    <div className={styles.people}>
      {
        result.map(itm => {
          const { name, id, known_for_department, profile_path } = itm
          return (
            <div key={id} className={styles.person}>
              {
                profile_path ? <img src={apiConfig.small(profile_path)} alt="person" className={styles.img} />
                  : <p>No image</p>
              }
              <div className={styles.overlay}>
                <div className={styles.content}>
                  <p>{known_for_department}</p>
                  <p>{name}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default PeopleCard