import elem1 from './img/elem1.jpg';
import illustration from './img/illustration.jpg';
import LayoutPromotionCard from './LayoutPromotionCard';

const StartPage = () => {
    return(
        <>
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
        
            <img src={elem1} alt="element" className="absolute right-0 md:left-0" />
            <div className="relative z-10">
            <LayoutPromotionCard>
                <div className="grid gap-10 md:content-center md:w-1/4 z-10">
                    <strong className="text-3xl font-normal tracking-wider">Virtual healthcare for you</strong>
                    <p className="text-slate-500 font-light tracking-wide">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone.</p>
                    <div>
                        <button className="bg-blue-500 rounded-full text-white px-5 py-3 text-xs font-bold">Consult today</button>
                    </div>
                </div>

                <img src={illustration} alt="foto" className="z-10" />
            </LayoutPromotionCard>
            </div>
        </>
    );
}

export default StartPage;