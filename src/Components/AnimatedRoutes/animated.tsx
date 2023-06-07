import { motion, easeInOut } from 'framer-motion'
import { ReactNode } from 'react'

type Type = {
    children: ReactNode,
    home?: string,
    people?: string
}

const Animated = ({ children }: Type) => {
    const anims = {
        initial: { opacity: 0 },
        animate: { opacity: 1, ease: easeInOut },
    }

    return (
        <motion.div
            variants={anims}
            initial="initial"
            animate="animate"
            transition={{ duration: .2, type: "spring" }}
            exit={{ opacity: 0, transition: { duration: .5 } }}
        >
            {children}
        </motion.div>
    )
}

export default Animated