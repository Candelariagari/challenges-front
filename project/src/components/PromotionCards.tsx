import DescriptionLayout from "./DescriptionLayout"
import LayoutPromotionCard from "./LayoutPromotionCard"
import element from "./img/elem2.png";
import illustration from "./img/illustration1.jpg";
import illustration1 from "./img/illustration3.jpg";

const PromotionCards = () => {
    return(
    <div className="hidden md:block">
        <LayoutPromotionCard>
            <img src={illustration} alt="foto" />
            <DescriptionLayout title="Leading healthcare providers" 
                        body="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, its not just work. We take pride in the solutions we deliver" 
                        textButton="Learn more"/>
        </LayoutPromotionCard>
        <img src={element}  className="absolute right-0"/>
        <LayoutPromotionCard>
            <DescriptionLayout title="Download our mobile apps"
                         body="Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"
                         textButton="Download"/>
            <img src={illustration1} alt="foto" />
        </LayoutPromotionCard>
    </div>      
    )
} 

export default PromotionCards