import { Intro } from "./components/Intro"
import { OurCoffees } from "./components/OurCoffees"
import { HomeContiner } from "./styles"

export const HomePage = () => {
    return(
        <HomeContiner>
            <Intro/>
            <OurCoffees/>
        </HomeContiner>
    )
}