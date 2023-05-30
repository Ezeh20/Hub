import CardsWrapper from "../../../../Components/Cards_wrapper/cards_wrapper"
import styles from './base.module.scss'
import Button from "../../../../Components/Button/button"
import { TbPlayerPlayFilled, TbPlayerStopFilled } from "react-icons/tb";

type videoType = {
    videoLink: [],
    iframeKey: string,
    setIframeKey: React.Dispatch<React.SetStateAction<string>>,
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}
const BaseInformation = ({ videoLink, setShow, setIframeKey, iframeKey }: videoType) => {

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
            <div className={styles.modal}>

            </div>
        </div>
    )
}

export default BaseInformation