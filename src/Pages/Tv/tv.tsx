import Animated from "../../Components/AnimatedRoutes/animated"
import Container from "../../Components/Container/container"
import Discover from "../../Components/Discover/discover"
import Footer from "../../Layout/Footer/footer"
import styles from './tv.module.scss'

const Tv = () => {
    return (
        <div className={styles.Tv}>
            <Animated>
                <Container>
                    <Discover mediaType='tv' />
                </Container>
            </Animated>
            <Footer />
        </div>
    )
}

export default Tv