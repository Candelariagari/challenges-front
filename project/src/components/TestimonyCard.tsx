// import element from "./img/elem2.png";

interface TestimonyData {
    profile_image: string;
    author_name: string;
    author_description: string;
    testimony: string;
}

const TestimonyCard = ({profile_image, author_name, author_description, testimony} : TestimonyData) => {
    return(
        <div className="flex pt-20 justify-around">
            <div className="w-3/5 bg-gradient-to-r from-blue-500 to-blue-300 p-12 rounded-3xl  place-items-center items-center text-white flex flex-col">
                <strong className="text-2xl font-normal tracking-wider" >What our customers are saying</strong>
                {/* <p>____</p> */}
                <div className=" border-b w-4 self-center "></div>
                <div className="flex justify-around py-8">
                    <div className="flex gap-4 items-center">
                        <img src={profile_image} className=" border-2 border-white rounded-full"/>

                        <div className="flex flex-col">
                            <strong >{author_name}</strong>
                            <p className="font-light tracking-wide">{author_description}</p>
                        </div>
                    </div>
                    <p className=" font-light tracking-wide w-1/3">"{testimony}"</p>
                </div>
                
            </div>
            
            {/* <img src={element} className="absolute"/> no pude posicionarla donde corresponde, pedir ayuda */}
        </div>
    );
}

export default TestimonyCard;