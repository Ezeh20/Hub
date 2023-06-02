import Animated from "../../Components/AnimatedRoutes/animated"
import Container from "../../Components/Container/container"
import Discover from "../../Components/Discover/discover"

const Tv = () => {
    return (
        <Animated>
            <Container>
                <Discover mediaType='tv' />
            </Container>
        </Animated>
    )
}

export default Tv