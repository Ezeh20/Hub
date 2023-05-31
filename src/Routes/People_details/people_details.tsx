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


const PeopleDetails = () => {
  const [current, setCurrent] = useState(0)
  const { uid } = useParams()
  const [result, setResult] = useState<{}>({})
  const [img, setImg] = useState<[]>([])

  const renderOps = ['Biography', 'Known-For', 'Media']


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
    id,
    known_for_department,
    place_of_birth,
    popularity,
    name,
    profile_path,
    also_known_as
  }: any = result
  console.log(img);


  return (
    <>
      <div className={styles.people}>
        <Container variant={true}>
          <div className={styles.imgContainer}>
            {
              img && img.filter((_, idx) => idx === 1).map((itm, idx) => {
                const { file_path } = itm
                return (
                  <img key={idx}
                    src={file_path ? apiConfig.originalImg(file_path) : '/public/main-logo.svg'}
                    alt="backdrop" className={styles.backDrop} />
                )
              })
            }
            <img src={profile_path ? apiConfig.small(profile_path) : '/public/no-img.jpg'}
              alt="displayPic" className={`${styles.displayPic} displayPic`} />
          </div>

          <div className={styles.personInfomation}>
            <div className={styles.at}>
              <span className={styles.name}>{name}</span>
              {
                also_known_as && also_known_as.length > 0 && also_known_as.filter((_: string, idx: number) => idx === 0)
                  .map((itm: string) => {
                    return (
                      <span key={itm} className={styles.theAt}>@{itm}</span>
                    )
                  })
              }
            </div>
            <div className={styles.other}>
              <span className={styles.dep}>{known_for_department} || {popularity} || </span>
              <span className={styles.icnPeople}>
                <HiLocationMarker className={styles.icnicn} />
                {place_of_birth}
              </span>
              {
                birthday && <span className={styles.icnPeople}>
                  <FaBirthdayCake className={styles.icnicn} />
                  {birthday}
                </span>
              }
              {
                deathday && <span className={styles.icnPeople}>
                  <GiDeathSkull className={styles.icnicn} />
                  {birthday}
                </span>
              }
            </div>
          </div>
          <section className={styles.renderOption}>
            {
              renderOps.map((itm, idx) => {
                return (
                  <div key={idx}
                    className={current === idx ?
                      `${styles.options} ${styles.optionsAlt}`
                      : styles.options}
                    onClick={() => setCurrent(idx)}>
                    <p>{itm}</p>
                    {
                      current === idx && <div className={styles.indicator} />
                    }
                  </div>
                )
              })
            }
          </section>
          <div className={styles.line} />
        </Container>
      </div>
      <div>
        {
          current === 0 ? <Bio biography={biography} />
            : current === 1 ? <KnownFor id={id} />
              : current === 2 ? <Media id={id} /> : ''
        }
      </div>
    </>
  )
}

export default PeopleDetails