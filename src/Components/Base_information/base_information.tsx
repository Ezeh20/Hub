import { TbPlayerPlayFilled, TbPlayerStopFilled } from "react-icons/tb";
import CardsWrapper from '../Cards_wrapper/cards_wrapper';
import Button from '../Button/button';
import { useContext, useEffect, useState } from 'react';
import requestApi from '../../api/tmdb_api_config';
import { CurrentIdContext } from '../../Context/current_id_context/current_id';
import styles from './base_information.module.scss'
import { useParams } from "react-router";
import Loading from "../Loading-spinner/loading";


type videoType = {
    media: string,
}
const BaseInformation = ({ media }: videoType) => {
    const { setShow, setIframeKey, iframeKey } = useContext(CurrentIdContext)
    const { uid } = useParams()
    const [videoLink, setVideoLink] = useState<[]>([])
    const [isLoading, setIsLoading] = useState<{}>({})
    const [nowPlaying, setNowPlaying] = useState(false)

    useEffect(() => {
        const teaser = async () => {
            try {
                if (Number(uid)) {
                    const { data } = await requestApi.mediaInfo(media, Number(uid), 'videos')
                    setIsLoading(data)
                    setVideoLink(data.results)
                }
            } catch (error) {
                //
            }
        }
        teaser()
    }, [uid])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [iframeKey])

    const play = (key: string) => {
        setShow(true)
        setIframeKey(key)
        setNowPlaying(true)
    }
    const stop = () => {
        setShow(false)
        setIframeKey('')
        setNowPlaying(false)
    }

    const len = Object.keys(isLoading)
    return (
        <div>
            {
                len.length > 0 ?
                    <div className={styles.mainInfo}>
                        {
                            videoLink.length > 0 ?
                                <CardsWrapper id='media'>
                                    {
                                        videoLink.map((itm) => {
                                            const { key } = itm
                                            return (
                                                <div key={key} className={styles.vids}>
                                                    <iframe width="100%" height="100%" src={`https://www.youtube-nocookie.com/embed/${key}?autoplay=0`} frameBorder="0" allow="autoplay"></iframe>
                                                    <div className={styles.overlay}>
                                                        {
                                                            iframeKey === key ? <Button type="button" btnType="watch" onClick={() => stop()}>
                                                                <TbPlayerStopFilled className={styles.play} />
                                                            </Button>
                                                                : <Button type="button" btnType="watch"
                                                                    disabled={nowPlaying}
                                                                    onClick={() => play(key)}>
                                                                    <TbPlayerPlayFilled className={styles.play} />
                                                                </Button>
                                                        }
                                                    </div>

                                                </div>
                                            )
                                        })
                                    }
                                </CardsWrapper> : <p>No media to display</p>
                        }
                    </div> : <Loading />
            }
        </div>

    )
}

export default BaseInformation