import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { CompleteOrderPage } from "./pages/CompleteOrder"
import { HomePage } from "./pages/Home"
import { OrderConfirmed } from "./pages/OrderConfirmed"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<HomePage />} />
                <Route path="/completeOrder" element={<CompleteOrderPage />} />
                <Route path="/OrderConfirmed" element={<OrderConfirmed />} />
            </Route>
        </Routes>
    )
}