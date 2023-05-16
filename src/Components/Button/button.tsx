import React from 'react'
import styles from './button.module.scss'

type Btn = {
    children: React.ReactNode,
    type: "button" | "submit" | "reset",
    btnType: string,
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const Button = ({ children, type, btnType, onClick }: Btn) => {
    return (
        <button type={type} onClick={onClick} className={`${styles.button} ${styles[btnType]} buttons`}>
            {children}
        </button>
    )
}

export default Button