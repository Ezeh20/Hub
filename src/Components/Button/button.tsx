import React from 'react'
import styles from './button.module.scss'

type Btn = {
    children: React.ReactNode,
    type: "button" | "submit" | "reset",
    btnType: string
}

const Button = ({ children, type, btnType }: Btn) => {
    return (
        <button type={type} className={`${styles.button} ${styles[btnType]} buttons`}>
            {children}
        </button>
    )
}

export default Button