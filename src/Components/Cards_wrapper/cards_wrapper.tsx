import React from 'react'
import styles from './cards_wrapper.module.scss'
import { TbSquareRoundedArrowLeftFilled, TbSquareRoundedArrowRightFilled } from "react-icons/tb";

type Children = {
    children: React.ReactNode
}

const CardsWrapper = ({ children }: Children) => {
    return (
        <div className={styles.con}>
            <div className={styles.Wrapper}>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
            <TbSquareRoundedArrowLeftFilled className={` ${styles.arr} ${styles.arrLeft}`} />
            <TbSquareRoundedArrowRightFilled className={`${styles.arr} ${styles.arrRight}`} />
        </div>
    )
}

export default CardsWrapper