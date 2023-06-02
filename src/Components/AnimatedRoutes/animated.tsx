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
    const animsHome = {
        initial: { opacity: 0 },
        animate: { opacity: 1, },

    }

    const animsPeople = {
        initial: { opacity: 0, scale: .5 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0 }
    }
    return (
        <motion.div
            variants={anims}
            initial="initial"
            animate="animate"
            transition={{ duration: 1, when: 'beforeChildren' }}
            exit={{ opacity: 0, transition: { duration: 1, ease: easeInOut } }}

        >
            {children}
        </motion.div>
    )
}

export default Animated