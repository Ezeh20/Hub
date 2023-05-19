import styles from './display_card.module.scss'

type Display = {
    trendingResult: []
}
const DisplayCard = (props: Display) => {
    const { trendingResult } = props
    return (
        <div>
            {
                trendingResult && trendingResult.map(itm=>{
                    return(
                        
                    )
                })
            }
        </div>
    )
}

export default DisplayCard