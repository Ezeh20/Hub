import CardsWrapper from "../../../Components/Cards_wrapper/cards_wrapper"
import Container from "../../../Components/Container/container"
import PeopleCard from "../../../Components/People_card/people_card"



const PopularPeople = () => {
    return (
        <Container>
            <div className='HeadingsContainer'>
                <p className='Headings'>Popular people</p>
                <span className='HeadingSub'>Fans favorites</span>
            </div>
            <CardsWrapper id='people'>
                <PeopleCard />
            </CardsWrapper>
        </Container>
    )
}

export default PopularPeople