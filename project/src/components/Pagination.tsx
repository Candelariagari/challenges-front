import LeftArrowIcon from "./LeftArrowIcon";
import RightArrowIcon from "./RightArrowIcon";

const Pagination = () => {
    return(
        <div className="flex flex-row pt-8 pb-20 gap-12 justify-center items-center">
            <LeftArrowIcon />
            <div className="flex flex-row gap-2">
                <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                <div className="h-2 w-2 bg-blue-300 rounded-full"></div>
                <div className="h-2 w-2 bg-blue-300 rounded-full"></div>
                <div className="h-2 w-2 bg-blue-300 rounded-full"></div>
                <div className="h-2 w-2 bg-blue-300 rounded-full"></div>
            </div>
            <RightArrowIcon />
        </div>
    );
}

export default Pagination;