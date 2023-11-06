import search from './img/search.jpg';
import pharmacy from './img/pharmacy.jpg';
import consultation from './img/consultation.jpg';
import details from './img/details.jpg';
import emergency from './img/emergency.jpg';
import tracking from './img/tracking.jpg';
import vector from './img/Vector.png';
import ServiceCard from "./ServiceCard";
import element from "./img/elem2.png"
import vector2 from "./img/v2.jpg"
import vector3 from "./img/v3.png"
import vector4 from "./img/v4.png"

const AllServices = () => {
    const services = [
        {image: search, title: "Search doctor", body: "Choose your doctor from thousands of specialist, general, and trusted hospitals."},
        {image: pharmacy, title: "Online Farmacy", body: "Buy  your medicines with our mobile application with a simple delivery system."},
        {image: consultation, title: "Consultation", body: "Free consultation with our trusted doctors and get the best recomendations."},
        {image: details, title: "Details Info", body: "Free consultation with our trusted doctors and get the best recomendations."},
        {image: emergency, title: "Emergency Care", body: "You can get 24/7 urgent care for yourself or your children and yourlovely family"},
        {image: tracking, title: "Tracking", body: "Track and save your medical history and health data"}
    ];

    return(        
        <div  className="flex justify-center py-14 z-10 relative">
            <img src={vector} className="absolute -left-48 -top-2 md:left-0" />
            <img src={element} className="absolute -left-10 top-[360px] md:hidden" />
            <img src={vector2} className="absolute top-[400px] right-0 md:hidden" /> 
            <img src={element} className="absolute right-0 top-[820px] md:hidden" />
            <img src={vector3} className="absolute left-0 top-[800px] md:hidden" />
            <img src={element} className="absolute  top-[1180px] left-0 md:hidden" />
            <img src={vector4} className="absolute right-0 top-[1500px] md:hidden" />
            <img src={element} className="absolute right-0 -bottom-44 md:hidden" />
           
            <div className="w-3/5 grid gap-8 relative md:grid-cols-3 md:w-2/3">
                {services.map(service => (
                    <ServiceCard service={service} />
                ))}
            </div>
        </div>
    );
}
export default AllServices;