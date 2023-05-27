import { useState } from "react"
import CardsWrapper from "../../../../Components/Cards_wrapper/cards_wrapper"
import styles from './base.module.scss'
import Button from "../../../../Components/Button/button"
import { TbPlayerPlayFilled } from "react-icons/tb";

type videoType = {
    videoLink: []
}
const BaseInformation = ({ videoLink }: videoType) => {

    const [show, setShow] = useState(false)

    return (
        <div className={styles.mainInfo}>
            <CardsWrapper id='media'>
                {
                    videoLink.map((itm) => {
                        const { key, name } = itm
                        return (
                            <div key={key} className={styles.vids}>
                                <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${key}?autoplay=0`} frameBorder="0" allow="autoplay"></iframe>
                                <div className={styles.overlay}>
                                    <Button type="button" btnType="watch">
                                        <TbPlayerPlayFilled className={styles.play} />
                                    </Button>
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