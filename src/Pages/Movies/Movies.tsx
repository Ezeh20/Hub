import Animated from '../../Components/AnimatedRoutes/animated'
import Container from '../../Components/Container/container'
import Discover from '../../Components/Discover/discover'
import Footer from '../../Layout/Footer/footer'
import styles from './movie.module.scss'

const Movies = () => {

  return (
    <div className={styles.Movie}>
      <Animated>
        <Container>
          <Discover mediaType='movie' />
        </Container >
      </Animated>
      <Footer />
    </div>
  )
}

export default Movies