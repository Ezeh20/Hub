import { Circle } from 'rc-progress';
type rating = {
    rating: number
}

const Rating = ({ rating }: rating) => {

    return (
        <Circle percent={rating} strokeWidth={10} trailWidth={10}
            strokeColor={rating <= 49 ? 'red'
                : rating <= 50
                    ? 'red'
                    : rating <= 69
                        ? '#FFB84C'
                        : '#21d07a'}
            style={{
                width: '50px', height: '50px',
            }} />
    )
}



export default Rating