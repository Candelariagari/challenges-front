interface Author {
    image: string;
    name: string;
    description: string;
    testimony: string;
}

interface TestimonyProps {
    author : Author;
}

const TestimonyCard = ({author} : TestimonyProps) => {
    return(
        <div className="flex pt-20 justify-around">
            <div className="w-3/5 bg-gradient-to-r from-blue-500 to-blue-300 p-12 rounded-3xl  place-items-center items-center text-white flex flex-col">
                <strong className="text-2xl font-normal tracking-wider" >What our customers are saying</strong>
                <div className=" border-b w-4 self-center "></div>
                <div className="flex justify-around py-8">
                    <div className="flex gap-4 items-center">
                        <img src={author.image} className=" border-2 border-white rounded-full"/>

                        <div className="flex flex-col">
                            <strong >{author.name}</strong>
                            <p className="font-light tracking-wide">{author.description}</p>
                        </div>
                    </div>
                    <p className=" font-light tracking-wide w-1/3">"{author.testimony}"</p>
                </div>
                
            </div>
        </div>
    );
}

export default TestimonyCard;