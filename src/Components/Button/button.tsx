import React from 'react'
import styles from './button.module.scss'

type Btn = {
    children: React.ReactNode,
    type: "button" | "submit" | "reset",
    btnType: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
    disabled?: boolean
}

const Button = ({ children, type, btnType, onClick, disabled }: Btn) => {

    return (
        <button type={type} disabled={disabled}
            onClick={onClick}
            className={`${styles.button} ${styles[btnType]} btns ${disabled && `disabled`}`}>
            {children}
        </button>
    )
}



export default Button