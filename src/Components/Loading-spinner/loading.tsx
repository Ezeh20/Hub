import ReactLoading from 'react-loading';
import styles from './loading.module.scss'

const Loading = () => {
    return (
        <div className={styles.loading}>
            <ReactLoading type={`spin`} color={`rgba(87, 255, 218, 1)`} height={'30px'} width={'30px'} />
        </div>
    )
}

export default Loading