const Header = () => {
    return(
        <div className="flex items-center p-10 md:place-content-around">
            <div className="flex items-center gap-x-2">
                <div className="inline-flex justify-center items-center h-12 w-12 rounded-full bg-blue-500">
                    <p className="text-white text-xl font-bold">T</p>
                </div>
                <h2 className="font-bold text-2xl">Trafalgar</h2>
            </div>
            
            <div className="md:flex gap-x-7 text-zinc-600 hidden">
                <a className="text-stone-950 font-semibold">Home</a>
                <a>Find a doctor</a>
                <a>Apps</a>
                <a>Testimonials</a>
                <a>About us</a>
                <a>Login</a>
            </div>
        </div>
    );
}

export default Header;