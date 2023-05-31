import Container from '../../../Components/Container/container'
import styles from './bio.module.scss'

type Type = {
    biography: string
}
const Bio = ({ biography }: Type) => {

    return (
        <Container variant={true}>
            <p className={styles.bio}>{biography}</p>
        </Container>
    )
}

export default Bio