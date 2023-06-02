import Button from "../Button/button"
import styles from './loadpage.module.scss'
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import { useEffect } from 'react'


type Load = {
    totalPages: number,
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
}


const LoadPage = ({ totalPages, page, setPage }: Load) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [page])

    return (
        <div className={styles.load}>
            {
                page > 1 &&
                <Button btnType='reload' type='button'
                    onClick={() => setPage((pre) => pre - 1)}>
                    <BiArrowFromRight className={styles.icns} />
                </Button>
            }
            <span>{page}</span>
            {
                totalPages !== page &&
                <Button btnType='reload' type='button'
                    onClick={() => setPage((pre) => pre + 1)}>
                    <BiArrowFromLeft className={styles.icns} />
                </Button>
            }
        </div>
    )
}

export default LoadPage