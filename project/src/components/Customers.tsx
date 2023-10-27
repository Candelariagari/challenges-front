import Pagination from "./Pagination"
import TestimonyCard from "./TestimonyCard"
import profile_image from "./img/profile_pic.png";

const Customers = () => {
    return(
        <>
        <div className="hidden md:block">
            <TestimonyCard profile_image={profile_image}
                author_name="Edward Newgate"
                author_description="Founder Circle"
                testimony="Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely."
            />
            <Pagination />
        </div>
        
        </>
    )
}

export default Customers