import { motion } from 'framer-motion'
import Container from '../../Components/Container/container'
import styles from './footer.module.scss'

const Footer = () => {
    return (
        <motion.div
            className={`${styles.footer}`}>
            <Container>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className={styles.footerContent}>
                    <motion.div
                        className={styles.logos}>
                        <img src="/public/main-logo.svg" alt="logo" className={styles.logo} />
                        <span>X</span>
                        <img src="/public/tmdb-alt.svg" alt="logo-tmdb" className={styles.logo} />
                    </motion.div>
                    <motion.div

                        className={styles.text}>
                        <p>Powered by TMDB Api</p>
                        <p>All rights reserved Cj & TMDB</p>
                    </motion.div>
                </motion.div>
            </Container>
        </motion.div>
    )
}

export default Footer