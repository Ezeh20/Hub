import React from 'react'
import './button.scss'



type Btn = {
    children: React.ReactNode,
    type: "button" | "submit" | "reset",
    btnType: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
    disabled?: boolean,
    active?: boolean
}

type custom = {
    [index: string]: string
}

const buttonOptions: custom = {
    genre: 'genre',
    search: 'search',
    searchIcon: 'searchIcon',
    reload: 'reload'
}


const Button = ({ children, type, btnType, onClick, disabled, active }: Btn) => {

    return (
        <button type={type} disabled={disabled}
            onClick={onClick}
            className={`CustomButton ${buttonOptions[btnType]}
            ${active && 'activeGenre'}
             ${disabled && `disabled`}`}>
            {children}
        </button>
    )
}



export default Button