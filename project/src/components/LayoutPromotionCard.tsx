import  { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const LayoutPromotionCard = ({children}: Props) => {
    return(
        <div className="flex flex-col p-10 justify-around md:flex-row md:px-40 md:py-20">
            {children}
        </div>
    );
}

export default LayoutPromotionCard;
