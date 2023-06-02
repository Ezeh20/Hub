import { motion, easeInOut } from 'framer-motion'
import { ReactNode } from 'react'

type Type = {
    children: ReactNode,
    home?: string,
    people?: string
}

const Animated = ({ children, home, people }: Type) => {
    const anims = {
        initial: { opacity: 0 },
        animate: { opacity: 1, ease: easeInOut },
    }

    const animsPeople = {
        initial: { opacity: 0, scale: 0 },
        animate: { opacity: 1, scale: 1, ease: easeInOut },

    }
    return (
        <motion.div
            variants={home === 'home' ? anims : people === 'people' ? animsPeople : anims}
            initial="initial"
            animate="animate"
            transition={{ duration: .5, when: 'beforeChildren' }}
            exit={{ opacity: 0, transition: { duration: .5, ease: easeInOut } }}
        >
            {children}
        </motion.div>
    )
}

export default Animated