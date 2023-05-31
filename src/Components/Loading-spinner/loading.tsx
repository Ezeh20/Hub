import ReactLoading from 'react-loading';
import styles from './loading.module.scss'

const Loading = () => {
    return (
        <div className={styles.loading}>
            <ReactLoading type={`spin`} color={`rgba(87, 255, 218, 1)`} height={'12%'} width={'12%'} />
        </div>
    )
}

export default Loading