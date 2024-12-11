import React, { useState, useEffect,useContext } from "react";
import ArticleCard from "./ArticleCard";
import { ThemeContext } from "./themeContext";

const Hero = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchKey,setSearchKey] = useState("");
  const [category,setCategory] = useState("general");
  const {theme} = useContext(ThemeContext);
  const categories =["general","sports","business","health",
    "science","technology","entertainment"
  ]
  const handleSearch = (e)=>{
      setSearchKey(e.target.value.trim());
  }
  console.log(articles);
  const handleCategory = (e)=>{
      setCategory(e.target.value.trim());
  }
//   const handleLang = (e)=>{
//     setLang(e.target.value);
//   }
  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = "6d9aee4f7e804d35998db55ac363f53a"; // ضع مفتاح API الخاص بك هنا
    const url = `https://newsapi.org/v2/top-headlines?q=${searchKey}&category=${category}&apiKey=${apiKey}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles); // حفظ المقالات في الحالة
        setLoading(false); // إيقاف مؤشر التحميل
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, [category,searchKey]);

  return (
    <div className={`pt-20 min-h-screen ${theme==="dark"?"bg-gradient-to-br from-[#220238] to-[#3f0531] text-white":""}`}>
        <h1 className="text-xl text-center">welcome to <span className="font-[cursive] font-bold">Bloggy</span></h1>
        <div className="my-5 m-auto w-fit">
            <input onChange={handleSearch} type="text" placeholder="search"className="border-2 border-blue-400 rounded outline-none focus:border-blue-600 transition-all p-2 bg-[#14ace820] focus:bg-[#14ace828]"/>
             <div className="flex items-center gap-1">
                 <select onChange={handleCategory} className="border-2 border-blue-400 rounded w-full p-2 bg-transparent text-lg my-2">
                     {categories.map((o,i)=>(
                      <option value={o} key={i} className={`capitalize transition-all ${theme==="dark"?"bg-[#1588c5]":""}`}>{o}</option>
                     ))}
                 </select>
             </div>
        </div>
        <div className={`${!loading?"hidden":""}`}>
          <h1 className="text-xl text-center my-2">Loading...</h1>
          <div className="size-10 rounded-full border-4 border-t-blue-300 m-auto animate-spin"></div>
        </div>
      <div>
        {
            articles.map((a,i)=>{
                return(
                    <ArticleCard key={i}
                    title={a.title}
                    content={a.description}
                    img={a.urlToImage}
                    src={a.source.name}
                    publishDate={a.publishedAt.slice(0,10)+" "+a.publishedAt.slice(11,16)}
                    />
                )
            })
        }
      </div>
    </div>
  );
};

export default Hero;