import Introduction from "./Introduction";
import AllServices from "./AllServices";
import LightBlueButton from "./LightBlueButton";

const SecondPage = () => {
    return(
        <>
            <Introduction />
            <AllServices />
            <div className="flex justify-center">
                <LightBlueButton text={"Learn more"}/>
            </div>
        </>
    );
}

export default SecondPage;