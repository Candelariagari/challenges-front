interface ServiceCardProps {
    image: string;
    title:string;
    body:string
}

const ServiceCard = ({image, title, body}:ServiceCardProps) => {
    return(
        <div className="rounded-xl px-5 py-8 flex flex-col gap-6 bg-white shadow-lg">
            <div className="flex justify-center md:justify-start">
                <img className="w-16" src={image} />
            </div>
            <h3 className="font-bold tracking-wider">{title}</h3>
            <p className="text-slate-500 text-sm font-light tracking-wide">{body}</p>
        </div>
    );
}

export default ServiceCard;