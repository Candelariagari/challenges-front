import elem1 from './img/elem1.jpg';
import illustration from './img/illustration.jpg';
import LayoutPromotionCard from './LayoutPromotionCard';

const CompanyIntroduction = () => {
    return(
        <>        
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

export default CompanyIntroduction;