import HorizontalLine from "./HorizontalLine";
import LightBlueButton from "./LightBlueButton";

interface Data {
    title: String;
    body: String;
    textButton: String
}

const DescriptionLayout = ({title, body, textButton} : Data) => {
    return(
        <div className="grid  gap-8 content-center w-1/3">
            <strong className="text-3xl font-normal tracking-wider">{title}</strong>
            <HorizontalLine />
            <p className="text-slate-500 font-light tracking-wide">{body}</p>
            <LightBlueButton  text={textButton}/>
        </div>
    )
}

export default DescriptionLayout