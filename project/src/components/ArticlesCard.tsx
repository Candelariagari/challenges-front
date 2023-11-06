interface Article {
    image: string;
    header: string;
    body: string
}

interface ArticleProps {
   props : Article;
}

const ArticlesCard = ({props} : ArticleProps) => {
    return(
        <div className="rounded-xl bg-white shadow-lg flex flex-col gap-4 justify-between z-10">
            <img src={props.image} />
            <div className="h-full grid gap-4 p-4 pt-0">
                <strong className="font-bold tracking-wider">{props.header}</strong>
                <p className="text-slate-500 text-sm font-light tracking-wide">{props.body}</p>
                <div className="flex items-center gap-2">
                    <a className="text-blue-500">Read more</a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 20" className="stroke-blue-500 w-6">
                        <path d="M3.73745 11.2372L24.7834 11.2372L20.1596 15.861C19.5219 16.4987 19.5219 17.4553 20.1596 18.0931C20.7974 18.7308 21.754 18.7308 22.3918 18.0931L29.726 10.7589C30.3637 10.1212 30.3637 9.16452 29.726 8.52677L22.3918 1.19258C21.754 0.554828 20.7974 0.554828 20.1596 1.19258C19.5219 1.83034 19.5219 2.78697 20.1596 3.42473L24.7834 8.04845L3.73745 8.04845C2.94025 8.04845 2.14306 8.6862 2.14306 9.64284C2.14306 10.5995 2.94025 11.2372 3.73745 11.2372Z" fill="#458FF6"/>
                    </svg>
                </div>
            </div> 
        </div>
    )
}

export default ArticlesCard