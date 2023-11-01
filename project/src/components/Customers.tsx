import Pagination from "./Pagination"
import TestimonyCard from "./TestimonyCard"
import profile_image from "./img/profile_pic.png";

const Customers = () => {
    const author = {
        image: profile_image,
        name: "Edward Newgate", 
        description: "Founder Circle", 
        testimony: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely."
    };

    return(
        <div className="hidden md:block">
            <TestimonyCard author={author} />
            <Pagination />
        </div>
    )
}

export default Customers