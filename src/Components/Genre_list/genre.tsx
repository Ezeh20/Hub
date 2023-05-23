import React, { useCallback, useEffect, useState } from 'react'
import requestApi from '../../api/tmdb_api_config'
import CardsWrapper from '../Cards_wrapper/cards_wrapper'
import styles from './genre.module.scss'
import Button from '../Button/button'

type genre = {
    setGenre: React.Dispatch<React.SetStateAction<null>>,
    genre: null | number
}

const Genre = ({ setGenre, genre }: genre) => {

    const [genreList, setGenreList] = useState<[]>([])

    useEffect(() => {
        const getGenre = async () => {
            try {
                const { data } = await requestApi.movieGenres('movie')
                setGenreList(data.genres)
            } catch (error) {
                if (error instanceof Error)
                    throw new Error(error.message)
            }
        }
        getGenre()
    }, [])

    const handleSubmit = useCallback((id: any) => {
        setGenre(id)
    }, [genre])

    return (
        <div className={styles.GR}>
            <CardsWrapper id='genre' alt={true}>
                <div className={styles.Genre}>
                    {
                        genreList && genreList.map((itm) => {
                            const { id, name } = itm
                            return (
                                <div key={id} className={styles.genreList}>
                                    <Button type='button'
                                        active={genre && genre === id ? true : false}
                                        btnType='genre'
                                        onClick={() => handleSubmit(id)}>
                                        {name}
                                    </Button>
                                </div>
                            )
                        })
                    }
                </div>
            </CardsWrapper>
        </div>
    )
}

export default Genre