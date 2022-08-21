import { QuantityInput } from "../../../../components/QuantityInput"
import { RegularText, TitleText } from "../../../../components/Typography"
import { CoffeeCardContainer, Name, Tags, Description, CardFooter, AddCartWrapper } from "./styles"
import { ShoppingCart } from "phosphor-react"
import { formatMoney } from "../../../../utils/formatMoney"
import { useCart } from "../../../../hooks/useCart"
import { useState } from "react"

export interface Coffee {
    id: number,
    tags: string[],
    name: string,
    description: string,
    photo: string,
    price: number
}

interface CoffeProps {
    coffee: Coffee;
}

export const CoffeeCard = ({ coffee }: CoffeProps ) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(state => state + 1)
    }

    const handleDecrease = () => {
        setQuantity(state => state - 1)
    }

    const { addCoffeeToCart } = useCart();

    const handleAddTocart = () => {
        const coffeeToAdd = {
            ...coffee,
            quantity,
        }
        addCoffeeToCart(coffeeToAdd)
    }

    const formattedPrice = formatMoney(coffee.price)

    return(
        <CoffeeCardContainer>
            <img src={`/coffees/${coffee.photo}`} />

            <Tags>
                {coffee.tags.map(tag => (
                    <span key={`${coffee.id}${tag}`}>{tag}</span>
                ))}
            </Tags>

            <Name>{coffee.name}</Name>
            <Description>{coffee.description}</Description>

            <CardFooter>
                <div>
                    <RegularText size="s">R$</RegularText>
                    <TitleText size="m" color="text" as="strong">{formattedPrice}</TitleText>
                </div>

                <AddCartWrapper>
                    <QuantityInput 
                        onIncrease={handleIncrease} 
                        onDecrease={handleDecrease}
                        quantity={quantity} />
                        <button onClick={handleAddTocart}>
                            <ShoppingCart size={22} weight="fill" />
                        </button>
                </AddCartWrapper>
            </CardFooter>
        </CoffeeCardContainer>
    )
}