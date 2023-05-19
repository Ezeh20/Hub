import apiConfig from '../../../../api/api_config'
import styles from './content.module.scss'
import Rating from '../../../../Components/Rating/rating';
import Button from '../../../../Components/Button/button';
import { BsArrowBarRight } from "react-icons/bs";

type Props = {
    rating: number,
    original_title: string,
    poster_path: string,
    overview: string,
    name: string,
    genreArr: [],
}

const Info = (props: Props) => {
    const { poster_path, rating, original_title, overview, genreArr, name } = props

    return (
        <div className={styles.content}>
            <img src={apiConfig.small(poster_path)} alt="poster" className={styles.poster} />
            <div className={styles.Info}>
                <div className={styles.rating}>
                    <Rating rating={rating} />
                    <p className={styles.percentage}>
                        {rating.toFixed(0)}
                        <span className={styles.per}>%</span>
                    </p>
                </div>
                {
                    original_title ? <p className={styles.title}>{original_title}</p> :
                        <p className={styles.title}>{name}</p>
                }
                <p className={styles.overView}>{overview}</p>
                <div className={styles.genre}>
                    {
                        genreArr.map(itm => {
                            const { id, name } = itm
                            return (
                                <div key={id} className={styles.genreLists}>
                                    <p>{name}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.btn}>
                    <Button type='button' btnType=''>
                        view
                        <BsArrowBarRight className={styles.icn} />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Info