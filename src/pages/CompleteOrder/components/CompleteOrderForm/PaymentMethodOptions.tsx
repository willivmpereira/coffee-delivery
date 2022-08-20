import { PaymentMethodInput } from "../PaymentMethodInput"
import { PaymentMethodOptionsContainer } from "./style"

export const PaymentMethodOptions = () => {
    return(
        <PaymentMethodOptionsContainer>
            <PaymentMethodInput/>
            <PaymentMethodInput/>
            <PaymentMethodInput/>
        </PaymentMethodOptionsContainer>
    )
}