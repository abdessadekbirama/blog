import { useContext, useState } from 'react';
import { ThemeContext } from './themeContext';
function ArticleCard({img,title,content,publishDate,src,url}){

    const [more,setMore] = useState(false);
    const {theme} = useContext(ThemeContext);
    const toggleMore = ()=>{
        setMore(!more);
    }
    const readMore = ()=>{
        window.open(url);
    }
    return (
        <div className="border-2 rounded border-[#d3e08b] flex flex-col gap-2 my-2 p-2 sm:w-2/3 m-auto">
            <img className={`block rounded bg-[url(/bg-img.png)] min-w-[200px] min-h-[150px] bg-contain bg-no-repeat bg-center`} src={img} alt=""/>
            <h1 className="text-2xl mx-5">{title}</h1>
            <div>
                <p className={`mx-5 text-ellipsis ${more?"":"line-clamp-2"}`}>{content}</p>
                <button className='float-end font-bold' onClick={toggleMore}>{!more?"See more...":"See less"}</button>
            </div>
            <div className='mx-10 border-t-2 border-b-2 flex gap-3 items-center p-1 justify-between'>
                <p className='font-bold'>{src}</p>
                <p>{publishDate.slice(0,10)} {publishDate.slice(11,16)}</p>
            </div>
            <button onClick={readMore} className={`bg-black text-white rounded w-fit block m-auto p-1 hover:shadow-[0_0_10px_1px_blue] transition-all ${theme==="dark"?"bg-[#006787]":""}`}>read more</button>
        </div>
    )
}
export default ArticleCard;
