import { TitleText } from "../../../../components/Typography"
import { coffees } from "../../../../data/coffees"
import { CoffeCard } from "../CoffeeCard"
import { CoffeList, OurCoffeesContainer } from "./styles"

export const OurCoffees = () => {
    return (
        <OurCoffeesContainer className="container">
            <TitleText size="l" color="subtitle">
                Nossos cafés
            </TitleText>
            <CoffeList>
                {coffees.map((coffee) => (
                    <CoffeCard key={coffee.id} coffee={coffee}/>
                ))}
            </CoffeList>
        </OurCoffeesContainer>
    )
}