import { useState } from 'react';

function ArticleCard({img,title,content,publishDate,src}){

    const [more,setMore] = useState(false);

    const toggleMore = ()=>{
        setMore(!more);
    }
    return (
        <div className="border-2 rounded border-[#d3e08b] flex flex-col gap-2 my-2 p-2 sm:w-2/3 m-auto">
            <img className="block rounded" src={img} alt=""/>
            <h1 className="text-2xl mx-5">{title}</h1>
            <div>
                <p className={`mx-5 text-ellipsis ${more?"":"line-clamp-2"}`}>{content}</p>
                <button className='float-end font-bold' onClick={toggleMore}>{!more?"See more...":"See less"}</button>
            </div>
            <div className='mx-10 border-t-2 border-b-2 flex gap-3 items-center p-1 justify-between'>
                <p className='font-bold'>{src.toUpperCase()}</p>
                <p>{publishDate}</p>
            </div>
        </div>
    )
}
export default ArticleCard;