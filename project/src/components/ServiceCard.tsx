interface Service {
    image: string;
    title: string;
    body: string;
}

interface ServiceCardProps {
    service : Service;
}

const ServiceCard = ({service} : ServiceCardProps) => {
    return(
        <div className="rounded-xl px-5 py-8 flex flex-col gap-6 bg-white shadow-lg">
            <div className="flex justify-center md:justify-start">
                <img className="w-16" src={service.image} />
            </div>
            <h3 className="font-bold tracking-wider">{service.title}</h3>
            <p className="text-slate-500 text-sm font-light tracking-wide">{service.body}</p>
        </div>
    );
}

export default ServiceCard;