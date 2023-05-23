import React, { useCallback, useEffect, useState } from 'react'
import requestApi from '../../api/tmdb_api_config'

type Input = {
    placeholder: string,
    setResult: React.Dispatch<React.SetStateAction<[]>>,
    mediaType: string
}

const Input = ({ placeholder, setResult, mediaType }: Input) => {

    const [searchValue, setSearchValue] = useState<string>('')
    const [search, setSearch] = useState<string>('')

    useEffect(() => {
        const searchQuery = async () => {
            try {
                const { data } = await requestApi.search(mediaType, search)
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
        <div>
            <input type="text" placeholder={placeholder} onChange={onChange} />
            <button disabled={searchValue.length > 0 ? false : true} onClick={query}>press</button>
        </div>
    )
}

export default Input