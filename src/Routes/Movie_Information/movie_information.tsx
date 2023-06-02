import { useContext } from 'react'
import styles from './movie_infomation.module.scss'
import { IoIosPeople } from "react-icons/io";
import { BsCalendar2Date } from "react-icons/bs";
import { FaLanguage } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";
import { Link } from 'react-router-dom'
import MediaHeroDisplay from '../../Components/MediaHero/media_hero'
import { CurrentIdContext } from '../../Context/current_id_context/current_id'
import Container from '../../Components/Container/container'
import Recommended from '../../Components/Recommended/recommended'
import BaseInformation from '../../Components/Base_information/base_information'
import Credits from '../../Components/Credits/credits';
import Animated from '../../Components/AnimatedRoutes/animated';
import Footer from '../../Layout/Footer/footer';

const MovieInformation = () => {
    const { result } = useContext(CurrentIdContext)

    const {
        id,
        original_language,
        budget,
        revenue,
        release_date,
        homepage,
        popularity,
        production_companies,
    }: any = result

    const BudgetF = new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD',
    }).format(Number(budget))

    const RevenueF = new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD',
    }).format(Number(revenue))


    return (
        <div className={styles.MovieContainer}>
            <Animated>
                <MediaHeroDisplay media='movie' />
                <Container>
                    <div className={styles.MovieInfo}>
                        <p className={`${styles.head} HeadingsAlt`}>Media</p>
                        <div className={styles.top}>
                            <BaseInformation media='movie' id={id} />
                        </div>
                        <p className={`${styles.cas} HeadingsAlt`}>Casts</p>
                        <div className={styles.bottom}>
                            <div className={styles.wrapper}>
                                <Credits media='movie' id={id} />
                                <div>
                                    <p className={`${styles.cas} HeadingsAlt`}>Recommended</p>
                                    <Recommended media='movie' id={id} />
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
                                    {release_date}
                                </p>
                                <p className={styles.money}>
                                    <span>Budget</span>
                                    <span className={styles.amount}>{BudgetF}</span>
                                </p>
                                <p className={styles.money}>
                                    <span>Revenue</span>
                                    <span className={budget > revenue ? `${styles.amountRed}`
                                        : `${styles.amount}`}>
                                        {RevenueF}
                                    </span>
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
            </Animated>
            <Footer />
        </div>


    )
}

export default MovieInformation