import Animated from '../../Components/AnimatedRoutes/animated'
import Container from '../../Components/Container/container'
import Discover from '../../Components/Discover/discover'

const Movies = () => {

  return (
    <Animated>
      <Container>
        <Discover mediaType='movie' />
      </Container >
    </Animated>
  )
}

export default Movies