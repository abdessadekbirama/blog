import React, { useEffect, useState, useContext} from 'react';
import axios from 'axios';
import ArticleCard from './ArticleCard';
import { ThemeContext } from './themeContext';

const NewsApp = () => {
  const {theme} = useContext(ThemeContext);
  const [news, setNews] = useState([]);
  const [category,setCategory] = useState("general");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const categories = [
    { label: 'All', value: 'general' },
    { label: 'business', value: 'business' },
    { label: 'health', value: 'health' },
    { label: 'science', value: 'science' },
    { label: 'sports', value: 'sports' },
    { label: 'technology', value: 'technology' }
  ]
  const changeCategory = (e)=>{
    setCategory(e.target.value);
  }
  
  useEffect(() => {
    // طلب الأخبار من الخادم الذي يعمل مع News API
    axios.get(`https://node-server2.vercel.app/news?category=${category}&country=us`)
      .then((response) => {
        setNews(response.data.articles.filter(article=>article.urlToImage));
        setLoading(false);
      })
      .catch((err) => {
        setError('حدث خطأ أثناء جلب البيانات');
        setLoading(false);
      });
  }, [category]);

  if (error) {
    return <div>{error}</div>;
  }
  console.log(news);
  return (
    <div className={`pt-20 ${theme==="dark"?"bg-[linear-gradient(-45deg,#4e1b56,#250141)] bg-fixed text-white":""}`}>

        {
          loading?<div className='flex flex-col w-fit m-auto items-center gap-2'>
            <h1 className='text-xl'>Loading...</h1>
            <div className='size-10 border-2 border-gray-300 border-t-blue-500 animate-spin rounded-full'></div>
          </div>:
          <div>
            <div className='my-5 flex flex-col items-center gap-3'>
              <h1 className='text-2xl text-center'>welcome to <span className='font-bold font-[cursive]'>Bloggy</span></h1>
              <select onChange={changeCategory} className={`border-2 border-blue-500 p-2 rounded w-1/2 ${theme==="dark"?"bg-[#46016288]":""}`}>
                {categories.map((o,i)=>(
                  <option className={`transition-all ${theme==="dark"?"bg-[#340057] text-white":""}`} key={i} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            {news.map((article, index) => (
          <ArticleCard key={index} img={article.urlToImage} title={article.title} content={article.description} publishDate={article.publishedAt} src={article.source.name} url={article.url}/>
        ))}
          </div>
        }
    </div>
  );
};

export default NewsApp;

