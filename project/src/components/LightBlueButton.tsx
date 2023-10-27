const LightBlueButton = ({text} : {text: String}) => {
    return(
        <button className="bg-white rounded-full px-8 py-2 border-2 border-blue-500 text-blue-500 w-fit">{text}</button>
    );
}

export default LightBlueButton;