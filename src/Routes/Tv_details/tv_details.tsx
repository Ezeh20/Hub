import styles from './tv.module.scss'
import { useContext } from "react"
import { CurrentIdContext } from "../../Context/current_id_context/current_id"
import MediaHeroDisplay from "../../Components/MediaHero/media_hero"
import BaseInformation from "../../Components/Base_information/base_information"
import Credits from "../../Components/Credits/credits"
import { IoIosPeople } from "react-icons/io";
import { BsCalendar2Date } from "react-icons/bs";
import { FaLanguage } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";
import Recommended from "../../Components/Recommended/recommended"
import { Link } from "react-router-dom"
import Container from '../../Components/Container/container'
import Footer from '../../Layout/Footer/footer'


const TvDetails = () => {

  const { result } = useContext(CurrentIdContext)

  const {
    id,
    original_language,
    first_air_date,
    homepage,
    popularity,
    production_companies,
    number_of_seasons,
    number_of_episodes
  }: any = result



  return (

    <div>
        <MediaHeroDisplay media="tv" />
        <Container>
        <div className={styles.MovieInfo}>
          <p className={`${styles.head} HeadingsAlt`}>Media</p>
          <div className={styles.top}>
            <BaseInformation media='tv' id={id} />
          </div>
          <p className={`${styles.cas} HeadingsAlt`}>Casts</p>
          <div className={styles.bottom}>
            <div className={styles.wrapper}>
              <Credits media='tv' id={id} />
              <div>
                <p className={`${styles.cas} HeadingsAlt`}>Recommended</p>
                <Recommended media='tv' id={id} />
              </div>
            </div>
            <p className={`${styles.cas} HeadingsAlt`}>Info</p>
            <div className={styles.others}>
              {
                homepage && <Link to={homepage} className={styles.link}>
                  <BiLinkAlt />
                  <p className={styles.linktext}>Homepage</p>
                </Link>
              }
              <p className={styles.linkalt}>
                <FaLanguage />
                {original_language}
              </p>
              <p className={styles.linkalt}>
                <IoIosPeople className={styles.people} />
                {popularity}
              </p>
              <p className={styles.linkalt}>
                <BsCalendar2Date />
                {first_air_date}
              </p>
              <p className={styles.money}>
                <span>Seasons</span>
                <span>{number_of_seasons}</span>
              </p>
              <p className={styles.money}>
                <span>Episodes</span>
                <span >{number_of_episodes}</span>
              </p>
            </div>
            <p className={`${styles.cas} HeadingsAlt`}>Production</p>
            <div className={styles.production}>
              {
                production_companies && production_companies.map((itm: any) => {
                  const { name } = itm
                  return (
                    <p key={name} className={styles.company}>{name}</p>
                  )
                })
              }
            </div>
          </div>
        </div>
      </Container>
      <Footer/>
    </div>
  )
}

export default TvDetails