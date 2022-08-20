import { TitleText } from "../../../../components/Typography"
import { CoffeCard } from "../CoffeeCard"
import { CoffeList, OurCoffeesContainer } from "./styles"

export const OurCoffees = () => {
    return (
        <OurCoffeesContainer className="container">
            <TitleText size="l" color="subtitle">
                Nossos cafés
            </TitleText>
            <CoffeList>
            <CoffeCard/>
            <CoffeCard/>
            <CoffeCard/>
            <CoffeCard/>
            <CoffeCard/>
            <CoffeCard/>
            </CoffeList>
        </OurCoffeesContainer>
    )
}