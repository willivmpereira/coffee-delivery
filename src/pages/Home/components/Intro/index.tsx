import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles"
import introImg from '../../../../assets/intro-img.png'
import { RegularText } from "../../../../components/Typography"
import { InfoWidthIcon } from "../../../../components/InfoWithIcon"
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react"
import { useTheme } from "styled-components"

export const Intro = () => {

    const { colors } = useTheme();

    return (
        <IntroContainer>
            <IntroContent className="container">
                <div>
                    <section>
                        <IntroTitle size="xl">
                            Encontre o café perfeito para qualquer hora do dia
                        </IntroTitle>
                        <RegularText size="l" color="subtitle" as="h3">
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                        </RegularText>
                    </section>
                    <BenefitsContainer>
                        <InfoWidthIcon 
                            icon={<ShoppingCart weight="fill" />} 
                            text="Compra simples e segura" 
                            iconBg={colors["brand-yellow-dark"]}/>

                        <InfoWidthIcon 
                            icon={<Package weight="fill" />} 
                            text="Embalagem mantém o café intacto" 
                            iconBg={colors["base-text"]}/>

                        <InfoWidthIcon 
                            icon={<Timer weight="fill" />} 
                            text="Entrega rápida e rastreada" 
                            iconBg={colors["brand-yellow"]}/>

                        <InfoWidthIcon 
                            icon={<Coffee weight="fill" />} 
                            text="O café chega fresquinho até você" 
                            iconBg={colors["brand-purple"]}/>       
                    </BenefitsContainer>
                </div>

                <img src={introImg} alt="" />
            </IntroContent>
        </IntroContainer>
    )
}