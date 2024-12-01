import Article from "./Article";
import articles from "../data/articles";

function Blog(){
   return(
    <div>
        {articles.map((e,i)=>{
    return <Article key={i} title={e.title} content={e.content} likes={e.likes} shares={e.shares} comments={e.comments} commentsCount={e.commentsCount}/>
   })}
    </div>
   )
}

export default Blog;