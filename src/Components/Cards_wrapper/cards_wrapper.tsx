import React, { useRef } from 'react'
import styles from './cards_wrapper.module.scss'
import { TbSquareRoundedArrowLeftFilled, TbSquareRoundedArrowRightFilled } from "react-icons/tb";

type Children = {
    children: React.ReactNode,
    id: string,
    alt?: boolean
}

const CardsWrapper = ({ children, id, alt }: Children) => {

    const slider = useRef(null)

    const ScrollRight = () => {
        const right: any = document.getElementById(id)
        right.scrollLeft = right.scrollLeft + 500
    }

    const ScrollLeft = () => {
        const left: any = document.getElementById(id)
        left.scrollLeft = left.scrollLeft - 500
    }
    return (
        <div className={styles.con}>
            <div id={id} ref={slider} className={`${styles.Wrapper} ${alt && styles.WrapperAlt}`}>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
            <TbSquareRoundedArrowLeftFilled className={`
             ${styles.arr} ${styles.arrLeft} ${alt && styles.altarr}`}
                onClick={ScrollLeft}
            />
            <TbSquareRoundedArrowRightFilled className={`
            ${styles.arr} ${styles.arrRight}  ${alt &&  styles.altarrRight}`}
                onClick={ScrollRight}
            />
        </div>
    )
}

export default CardsWrapper