import { RegularText, TitleText } from "../../components/Typography"
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles"

import confirmedOrderIllustration from '../../assets/confirmed-order.svg'
import { InfoWidthIcon } from "../../components/InfoWithIcon"
import { MapPin, Clock, CurrencyDollar } from "phosphor-react"
import { useTheme } from "styled-components"

export const OrderConfirmed = () => {
    const { colors } = useTheme();

    return (
        <OrderConfirmedContainer className="container">
            <div>
                <TitleText size="l">Uhu! Pedido confirmado</TitleText>
                <RegularText size="l" color="subtitle">
                    Agora é só aguardar que logo o café chegará até você
                </RegularText>
            </div>

            <section>
                <OrderDetailsContainer>
                   <InfoWidthIcon 
                        icon={<MapPin weight="fill" />}
                        iconBg={colors["brand-purple"]}
                        text={
                            <RegularText>
                                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                                <br />
                                Farrapos - Porto Alegre, RS
                            </RegularText>
                        } 
                   />

                    <InfoWidthIcon 
                        icon={<Clock weight="fill" />}
                        iconBg={colors["brand-yellow"]}
                        text={
                            <RegularText>
                                Previsão de entrega
                                <br />
                                <strong>20 min - 30 min</strong>
                            </RegularText>
                        } 
                   />

                    <InfoWidthIcon 
                        icon={<CurrencyDollar weight="fill" />}
                        iconBg={colors["brand-yellow"]}
                        text={
                            <RegularText>
                                Pagamento na entrega
                                <br />
                                <strong>Cartão de Crédito</strong>
                            </RegularText>
                        } 
                   />
                </OrderDetailsContainer>
                <img src={confirmedOrderIllustration} alt="" />
            </section>
        </OrderConfirmedContainer>
    )
}