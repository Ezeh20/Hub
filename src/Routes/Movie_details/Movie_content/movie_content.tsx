import Container from '../../../Components/Container/container'
import Rating from '../../../Components/Rating/rating'
import apiConfig from '../../../api/api_config'
import styles from './movie_content.module.scss'

type Result = {
    id: number,
    backdrop_path: string,
    poster_path: string,
    vote_average: number,
    original_title: string,
    overview: string,
    genres: []
}


const MovieHero = ({ id, backdrop_path, poster_path, vote_average, genres, original_title, overview }: Result) => {


    return (
        <div className={styles.movieHero}>
            <img src={apiConfig.originalImg(backdrop_path)} alt="backdrop" className={styles.backDrop} />
            <div className={styles.overlay}>
                <Container>
                    <div className={styles.overlayContent}>
                        <img src={apiConfig.small(poster_path)} alt="poster" className={styles.imgPoster} />
                        <div className={styles.content}>
                            <Rating rating={vote_average} />
                            <span>{original_title}</span>
                            <span>{overview}</span>
                            <div className={styles.Genre}>
                                {
                                    genres && genres.map((itm) => {
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
        </div>
    )
}

export default MovieHero