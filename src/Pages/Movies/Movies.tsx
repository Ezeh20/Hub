import Animated from '../../Components/AnimatedRoutes/animated'
import Container from '../../Components/Container/container'
import Discover from '../../Components/Discover/discover'
import Footer from '../../Layout/Footer/footer'

const Movies = () => {

  return (
    <Animated>
      <Container>
        <Discover mediaType='movie' />
      </Container >
      <Footer />
    </Animated>
  )
}

export default Movies