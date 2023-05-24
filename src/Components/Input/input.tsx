import React, { useCallback, useState } from 'react'
import Button from '../Button/button'
import { FiSearch } from "react-icons/fi";
import styles from './input.module.scss'

type Input = {
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Input = ({ setSearch }: Input) => {

    const [searchValue, setSearchValue] = useState<string>('')

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearchValue(value)
    }
    const query = useCallback(() => {
        setSearch(searchValue)

    }, [searchValue])


    return (
        <div className={`${styles.input} inputs`}>
            <input type="text" placeholder='Search' onChange={onChange} className={`${styles.inp} inpColor`} />
            <Button type='button' btnType='search'
                disabled={searchValue.length > 0 ? false : true}
                onClick={query}><FiSearch />
            </Button>
        </div>
    )
}

export default Input