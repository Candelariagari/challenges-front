const Pagination = () => {
    return(
        <>
        <div className="flex flex-row pt-8 pb-20 gap-12 justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 32 20"  className="stroke-blue-300 w-6 md:hover:cursor-pointer">
                <g opacity="0.4">
                    <path d="M27.6911 8.76277L6.64523 8.76277L11.269 4.13905C11.9067 3.50129 11.9067 2.54466 11.269 1.90691C10.6312 1.26915 9.67457 1.26915 9.03681 1.90691L1.70263 9.24109C1.06487 9.87885 1.06487 10.8355 1.70263 11.4732L9.03681 18.8074C9.67457 19.4452 10.6312 19.4452 11.269 18.8074C11.9067 18.1697 11.9067 17.213 11.269 16.5753L6.64523 11.9515L27.6911 11.9515C28.4883 11.9515 29.2855 11.3138 29.2855 10.3572C29.2855 9.40053 28.4883 8.76277 27.6911 8.76277Z" fill="#458FF6"/>
                </g>
            </svg>
            <div className="flex flex-row gap-2">
                <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                <div className="h-2 w-2 bg-blue-300 rounded-full"></div>
                <div className="h-2 w-2 bg-blue-300 rounded-full"></div>
                <div className="h-2 w-2 bg-blue-300 rounded-full"></div>
                <div className="h-2 w-2 bg-blue-300 rounded-full"></div>
            </div>
           
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 20" className="stroke-blue-500 w-6 md:hover:cursor-pointer">
                <path d="M3.73745 11.2372L24.7834 11.2372L20.1596 15.861C19.5219 16.4987 19.5219 17.4553 20.1596 18.0931C20.7974 18.7308 21.754 18.7308 22.3918 18.0931L29.726 10.7589C30.3637 10.1212 30.3637 9.16452 29.726 8.52677L22.3918 1.19258C21.754 0.554828 20.7974 0.554828 20.1596 1.19258C19.5219 1.83034 19.5219 2.78697 20.1596 3.42473L24.7834 8.04845L3.73745 8.04845C2.94025 8.04845 2.14306 8.6862 2.14306 9.64284C2.14306 10.5995 2.94025 11.2372 3.73745 11.2372Z" fill="#458FF6"/>
            </svg>
        </div>
        </>
    );
}

export default Pagination;