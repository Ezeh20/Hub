import { useEffect, useState } from "react"
import { useParams } from "react-router"
import requestApi from "../../api/tmdb_api_config"
import Bio from "./Bio/bio"
import KnownFor from "./Known-for/known_for"
import Media from "./Media/media"
import Container from "../../Components/Container/container"
import styles from './people.module.scss'
import apiConfig from "../../api/api_config"
import { FaBirthdayCake } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { GiDeathSkull } from "react-icons/gi";
import Footer from "../../Layout/Footer/footer"


const PeopleDetails = () => {
  const [current, setCurrent] = useState(9)
  const { uid } = useParams()
  const [result, setResult] = useState<{}>({})
  const [img, setImg] = useState<[]>([])


  useEffect(() => {
    const person = async () => {
      try {
        const { data } = await requestApi.peopleDetails(Number(uid))
        setResult(data)
      } catch (error) {

      }
    }
    person()
  }, [uid])

  useEffect(() => {
    const person = async () => {
      try {
        const { data } = await requestApi.peopleImg(Number(uid))
        setImg(data.profiles)
      } catch (error) {

      }
    }
    person()
  }, [uid])

  const { biography,
    birthday,
    deathday,
    homepage,
    id,
    known_for_department,
    place_of_birth,
    popularity,
    name,
    profile_path,
    also_known_as
  }: any = result

  return (
    <>
      <div className={styles.people}>
        <Container variant={true}>
          <div className={styles.imgContainer}>
            {
              img && img.filter((_, idx) => idx === 2).map((itm, idx) => {
                const { file_path } = itm
                return (
                  <img key={idx} src={apiConfig.originalImg(file_path)} alt="backdrop" className={styles.backDrop} />
                )
              })
            }
            <img src={apiConfig.small(profile_path)} alt="displayPic" className={`${styles.displayPic} displayPic`} />
            <div className={styles.personInfomation}>
              <div className={styles.at}>
                <span className={styles.name}>{name}</span>
                {
                  also_known_as && also_known_as.length > 0 && also_known_as.filter((_: string, idx: number) => idx === 0)
                    .map((itm: string) => {
                      return (
                        <span key={itm}>@{itm}</span>
                      )
                    })
                }
              </div>
              <div className={styles.other}>
                <span className={styles.dep}>{known_for_department} || {popularity}</span>
                <span className={styles.icnPeople}><HiLocationMarker /> {place_of_birth}</span>
                {
                  birthday && <span className={styles.icnPeople}><FaBirthdayCake />{birthday}</span>
                }
                {
                  deathday && <span className={styles.icnPeople}><GiDeathSkull />{birthday}</span>
                }
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div>
        {
          current === 0 ? <Bio biography={biography} />
            : current === 1 ? <KnownFor />
              : current === 2 ? <Media /> : ''
        }
        <Footer/>
      </div>
    </>
  )
}

export default PeopleDetails