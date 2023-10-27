import element from "./img/elem2.png"

const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-blue-300 text-white relative">
            <div className="flex flex-col gap-12 p-10 md:flex-row md:px-44 md:py-24">
                <div className="flex flex-col gap-4  justify-center md:w-1/3">
                    <div className="flex gap-2 items-center">
                        <div className="inline-flex justify-center items-center h-10 w-10 rounded-full bg-white">
                            <p className="text-blue-500 text-xl font-bold">T</p>
                        </div>
                        <strong className="text-2xl font-normal tracking-wider">Trafalgar</strong>
                    </div>
                    <p className="font-light tracking-wide">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                    <p className="font-light tracking-wide">©Trafalgar PTY LTD 2020. All rights reserved</p> 
                </div>
                <div className="flex flex-col justify-center gap-4">
                    <strong className="font-bold tracking-wider">Company</strong>
                    
                    <p  className="font-light tracking-wide">About</p>
                    <p  className="font-light tracking-wide">Testimonials</p>
                    <p  className="font-light tracking-wide">Find a doctor</p>
                    <p  className="font-light tracking-wide">Apps</p>
                </div>
            </div>
            <img src={element} className="absolute right-0 bottom-0 md:left-0"/>
        </div>
    )
}

export default Footer