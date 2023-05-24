import Button from "../Button/button"
import styles from './loadpage.module.scss'

type Load = {
    totalPages: number,
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
}

const LoadPage = ({ totalPages, page, setPage }: Load) => {
    return (
        <div className={styles.load}>
            {
                page > 1 &&
                <Button btnType='reload' type='button'
                    onClick={() => setPage(pre => pre - 1)}>
                    Previous
                </Button>
            }
            {
                totalPages !== page &&
                <Button btnType='reload' type='button'
                    onClick={() => setPage(pre => pre + 1)}>
                    Next
                </Button>
            }
        </div>
    )
}

export default LoadPage