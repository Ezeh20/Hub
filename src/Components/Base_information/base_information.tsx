import { TbPlayerPlayFilled, TbPlayerStopFilled } from "react-icons/tb";
import CardsWrapper from '../Cards_wrapper/cards_wrapper';
import Button from '../Button/button';
import { useContext, useEffect, useState } from 'react';
import requestApi from '../../api/tmdb_api_config';
import { CurrentIdContext } from '../../Context/current_id_context/current_id';
import styles from './base_information.module.scss'

type videoType = {
    media: string,
    id: number
}
const BaseInformation = ({ media, id }: videoType) => {
    const { setShow, setIframeKey, iframeKey } = useContext(CurrentIdContext)
    const [videoLink, setVideoLink] = useState<[]>([])

    useEffect(() => {
        const teaser = async () => {
            try {
                if (id) {
                    const { data } = await requestApi.mediaInfo(media, id, 'videos')
                    setVideoLink(data.results)
                }
            } catch (error) {
                //
            }
        }
        teaser()
    }, [id])

    const play = (key: string) => {
        setShow(true)
        setIframeKey(key)
    }
    const stop = () => {
        setShow(false)
        setIframeKey('')
    }


    return (
        <div className={styles.mainInfo}>
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
                                            : <Button type="button" btnType="watch" onClick={() => play(key)}>
                                                <TbPlayerPlayFilled className={styles.play} />
                                            </Button>
                                    }
                                </div>

                            </div>
                        )
                    })
                }
            </CardsWrapper>
        </div>
    )
}

export default BaseInformation