import HorizontalLine from "./HorizontalLine";

const Introduction = () => {
    return(
    <div className="flex flex-col place-items-center justify-center">
        <h2  className="font-medium text-lg tracking-wide">Our Services</h2>
        <span className="hidden md:block">
            <HorizontalLine />
        </span>
        <p className="text-slate-500 font-light tracking-wide w-3/4 text-center py-3">
            We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health.
        </p>
    </div>
    );
}

export default Introduction;