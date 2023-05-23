import React, { useCallback, useEffect, useState } from 'react'
import requestApi from '../../api/tmdb_api_config'
import Button from '../Button/button'
import { FiSearch } from "react-icons/fi";
import styles from './input.module.scss'

type Input = {
    placeholder: string,
    setResult: React.Dispatch<React.SetStateAction<[]>>,
    mediaType: string,
    page: number
}

const Input = ({ placeholder, setResult, mediaType }: Input) => {

    const [searchValue, setSearchValue] = useState<string>('')
    const [search, setSearch] = useState<string>('')


    useEffect(() => {
        const searchQuery = async () => {
            try {
                const { data } = await requestApi.search(mediaType, search,1)
                console.log(data)
                setResult(data.results)
            } catch (error) {
                if (error instanceof Error)
                    throw new Error(error.message)
            }
        }
        searchQuery()
    }, [search])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearchValue(value)
    }
    const query = useCallback(() => {
        setSearch(searchValue)

    }, [searchValue])


    return (
        <div className={`${styles.input} inputs`}>
            <input type="text" placeholder={placeholder} onChange={onChange} className={`${styles.inp} inpColor`} />
            <Button type='button' btnType='search'
                disabled={searchValue.length > 0 ? false : true}
                onClick={query}><FiSearch />
            </Button>
        </div>
    )
}

export default Input