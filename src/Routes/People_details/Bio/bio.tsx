import Container from '../../../Components/Container/container'
import styles from './bio.module.scss'
import { motion } from 'framer-motion'

type Type = {
    biography: string
}
const Bio = ({ biography }: Type) => {

    return (
        <Container variant={true}>
            <motion.p
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .5 }}
                className={styles.bio}>
                {biography}
            </motion.p>
        </Container>
    )
}

export default Bio