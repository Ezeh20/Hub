import { useContext, useEffect, useState } from 'react'
import styles from './movie_infomation.module.scss'
import Container from '../../../Components/Container/container'
import requestApi from '../../../api/tmdb_api_config'
import DisplayCard from '../../../Components/Display_card/display_card'
import CardsWrapper from '../../../Components/Cards_wrapper/cards_wrapper'
import BaseInformation from './Base_information/base_information'
import { IoIosPeople } from "react-icons/io";
import { BsCalendar2Date } from "react-icons/bs";
import { FaLanguage } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";
import Recommended from './Recommended/recommended'
import { Link } from 'react-router-dom'
import MediaHeroDisplay from '../../../Components/MediaHero/media_hero'
import { CurrentIdContext } from '../../../Context/current_id_context/current_id'

const MovieInformation = () => {
    const { result, iframeKey, setIframeKey, setShow, show } = useContext(CurrentIdContext)
    const [results, setResults] = useState<[]>([])
    const [videoLink, setVideoLink] = useState<[]>([])

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

    useEffect(() => {
        const casts = async () => {
            try {
                if (id) {
                    const { data } = await requestApi.movieInfo(id, 'credits')
                    setResults(data.cast)
                }
            } catch (error) {

            }
        }
        casts()
    }, [id])

    useEffect(() => {
        const teaser = async () => {
            try {
                if (id) {
                    const { data } = await requestApi.movieInfo(id, 'videos')
                    setVideoLink(data.results)
                }
            } catch (error) {
                //
            }
        }
        teaser()
    }, [id])


    const BudgetF = new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD',
    }).format(Number(budget))

    const RevenueF = new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD',
    }).format(Number(revenue))


    return (
        <div>
            <MediaHeroDisplay />
            <Container>
                <div className={styles.MovieInfo}>
                    <p className={`${styles.head} HeadingsAlt`}>Media</p>
                    {
                        videoLink && videoLink.length > 0 ? <div className={styles.top}>
                            <BaseInformation videoLink={videoLink}
                                show={show}
                                setShow={setShow}
                                iframeKey={iframeKey}
                                setIframeKey={setIframeKey} />
                        </div> : 'No media to display'
                    }
                    <p className={`${styles.cas} HeadingsAlt`}>Casts</p>
                    <div className={styles.bottom}>
                        <div className={styles.wrapper}>
                            <div>
                                <CardsWrapper id='casts'>
                                    <DisplayCard result={results} typeOfMedia='person' />
                                </CardsWrapper>
                            </div>
                            <div>
                                <p className={`${styles.cas} HeadingsAlt`}>Recommended</p>
                                <Recommended id={id}
                                    setShow={setShow} />
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
        </div>
    )
}

export default MovieInformation