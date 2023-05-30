import Container from '../../../Components/Container/container'
import Rating from '../../../Components/Rating/rating'
import apiConfig from '../../../api/api_config'
import styles from './movie_content.module.scss'
import { HiOutlineStatusOnline } from "react-icons/hi";
import { RxLapTimer } from "react-icons/rx";


type ResulT = {
    result: {},
    show: boolean,
    iframeKey: string
}

const MovieHero = ({ result, iframeKey, show }: ResulT) => {

    const {
        backdrop_path,
        poster_path,
        vote_average,
        genres,
        original_title,
        overview,
        status,
        runtime
    }: any = result

    return (
        <div className={styles.movieHero}>
            <img src={apiConfig.originalImg(backdrop_path)} alt="backdrop" className={styles.backDrop} />
            <div className={styles.overlay}>
                <Container>
                    <div className={styles.overlayContent}>
                        <img src={apiConfig.small(poster_path)} alt="poster" className={styles.imgPoster} />
                        <div className={styles.content}>
                            <Rating rating={vote_average} />
                            <span className={styles.title}>{original_title}</span>
                            <span className={styles.overView}>{overview}</span>
                            <div className={styles.status}>
                                <span className={styles.stusIcn}><HiOutlineStatusOnline />{status}</span>
                                <span className={styles.stusIcn}><RxLapTimer /> {runtime} mins</span>
                            </div>
                            <div className={styles.Genre}>
                                {
                                    genres && genres.map((itm: any) => {
                                        const { id, name } = itm
                                        return (
                                            <div key={id} className={styles.GenreList}>
                                                {name}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            {
                show && <div className={styles.teaserOverlayContainer}>
                    <div className={styles.teaserOverlay}>
                        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${iframeKey}?autoplay=1`} frameBorder="0" allow="autoplay"></iframe>
                    </div>
                </div>
            }
        </div>
    )
}

export default MovieHero