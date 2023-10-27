import ArticlesCard from "./ArticlesCard"
import HorizontalLine from "./HorizontalLine"
import LightBlueButton from "./LightBlueButton"
import image1 from "./img/imarticle1.jpg"
import image2 from "./img/imarticle2.jpg"
import image3 from "./img/imarticle3.jpg"
import element from "./img/elem2.png"
import vector from "./img/v5.png"

const ArticlesPage = () => {
    const articles = [
        {image: image1, header: "Disease detection, check up in the laboratory", body: "In this case, the role of the health laboratory is very important to doa disease detection..." },
        {image: image2, header: "Herbal medicines that are safe for consumption", body: "Herbal medicine is very widely used at this time because of its very good for your health..."},
        {image: image3, header: "Natural care for healthy facial skin", body: "A healthy lifestyle should start from now and also for your skin health. There are some..."}]
    return(
        <div className="flex pt-10 pb-40 justify-around relative">
            <div className="px-12 place-items-center items-center flex flex-col relative md:w-3/5 md:p-0">
                <strong className="font-medium	text-lg	tracking-wide" >Check our latest article</strong>
                <HorizontalLine />
                <div className="grid gap-6 py-6 md:grid-cols-3 md:relative">
                    <img src={element} className="hidden absolute md:inline	-left-12 -top-8" />
                    {articles.map(article => (
                        <ArticlesCard image={article.image} header={article.header} body={article.body}/>
                    ))}
                </div>
                <img src={element} className="absolute scale-75 right-0 bottom-0 md:hidden" />
                <LightBlueButton text="View All"/>
            </div>
            <img src={vector} className="hidden absolute  scale-90 -right-5  md:inline" />
            <img src={element} className="hidden absolute right-14 bottom-0 md:inline" />
        </div>
    )
}

export default ArticlesPage