import { motion } from 'framer-motion'
import Container from '../../Components/Container/container'
import styles from './footer.module.scss'

const Footer = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className={`${styles.footer}`}>
            <Container>
                <div
                    className={styles.footerContent}>
                    <div
                        className={styles.logos}>
                        <img src="/public/main-logo.svg" alt="logo" className={styles.logo} />
                        <span>X</span>
                        <img src="/public/tmdb-alt.svg" alt="logo-tmdb" className={styles.logo} />
                    </div>
                    <div
                        className={styles.text}>
                        <p>Powered by TMDB Api</p>
                        <p>All rights reserved Cj & TMDB</p>
                    </div>
                </div>
            </Container>
        </motion.div>
    )
}

export default Footer