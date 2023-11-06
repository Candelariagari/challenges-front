import { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"

type Props = {
    children: ReactNode
}

const MainLayout = ({children} : Props) => {
    return(
        <>
        <Header />
            {children}
        <Footer />
        </>
    )
}

export default MainLayout