import {ArrowUturnDownIcon, ArrowUturnRightIcon,ChatBubbleLeftIcon,HandThumbUpIcon,ShareIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

const Comments = (props)=>{
    const [comments,setComments] = useState(props.comments);
    const [commentValue,setCommentValue] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        commentValue.trim().length>0?setComments([...comments,commentValue]):null;
    }
    const typeComment = (e)=>{
        setCommentValue(e.target.value);
    }
    return(
        <div style={{maxHeight:"80vh"}} className={`bg-zinc-200 rounded border-[1px] border-gray-400 px-3 pb-3 flex flex-col gap-4 h-fit overflow-auto ${!props.commentOpen?"hidden":""}`}>
            <form onSubmit={handleSubmit} className="flex items-center gap-2 justify-center">
                <textarea onChange={typeComment} className="m-1 p-2 outline-none border border-violet-400 rounded w-full sm:w-1/2" placeholder="comment..."></textarea>
                <button className="bg-[#e8b0e8] border-[#c41ac4] p-1 rounded border">Post</button>
            </form>
            {comments.map((c,i)=>{
                return(
                 <Comment key={i} comment={c}/>   
                )
            })}
        </div>
    )
}
const Comment = (props)=>{
    const [liked,setLiked] = useState(false);
    const [likes,setLikes] = useState(0);
    const [replyClick,setReplyClick] = useState(false);
    const [replyValue,setReplyValue] = useState("");
    const [replyList,setReplyList] = useState([]);

    const handleLike =()=>{
        setLiked(!liked);
        !liked?setLikes(likes+1):setLikes(likes-1)
    }
    const handleReplyClick = ()=>{
        setReplyClick(!replyClick);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    const handleReply = ()=>{
        setReplyClick(false);
        replyValue.trim().length>0?setReplyList([...replyList,replyValue]):null;
    }
    const TypeReply = (e)=>{
        setReplyValue(e.target.value);
    }
    return(
        <div>
           <div>
                <div className="flex w-full">
                    <p className="m-1 text-lg break-words max-w-full">{props.comment}</p>
                    <label className="text-gray-600">({likes})</label>
                </div>
                <details className="mx-3 mb-5">
                    {replyList.map((r,i)=>{
                        return(
                            <div key={i} className="flex items-start gap-1 text-gray-700">
                                <ArrowUturnDownIcon className="rotate-[-90deg] w-[20px]"/>
                                <p className="text-[17px] max-w-[80vw] w-fit break-words">{r}</p>
                            </div>
                        )
                    })}
                </details>
           </div>
            <div className="flex items-center gap-3">
                <div  onClick={handleLike} style={{width:"fit-content"}} className={`border-2 border-red-500 rounded p-0.5 flex hover:cursor-pointer transition-colors hover:scale-105 ${liked?"bg-red-500":""} ${liked?"text-white":""}`}>
                    <HandThumbUpIcon className="w-5"/>
                    <p>&nbsp;like</p>
                </div>
                <div>
                    <div onClick={handleReplyClick} className={`p-0.5 border-2 border-blue-500 rounded flex hover:cursor-pointer transition-colors hover:bg-blue-500 hover:scale-105 hover:text-white ${replyClick?"hidden":""}`}>
                        <ArrowUturnRightIcon className="w-5"/>
                        <p>&nbsp;reply</p>
                    </div>
                    <div className={`${replyClick?"":"hidden"}`}>
                        <form onSubmit={handleSubmit} className="flex items-center gap-2">
                            <textarea value={replyValue} onChange={TypeReply} className="m-1 p-2 outline-none border border-blue-400 rounded"></textarea>
                            <button disabled={replyValue.trim().length>0?false:true} onClick={handleReply} className="bg-blue-300 p-1 rounded border border-blue-500">Post</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
function Article(props){
    const [liked,setLiked] = useState(false);
    const [likes,setLikes] = useState(props.likes);
    const [commentOpen,setCommentOpen] = useState(false);
    const handleLike = ()=>{
        setLiked(!liked);
        !liked?setLikes(likes+1):setLikes(likes-1);
    }
    const handleCommentVision = ()=>{
        setCommentOpen(!commentOpen);
    }
    return(
        <div className="mx-3 flex flex-col items-center border-b-2 border-[#02080c43] py-2">
            <h1 className="text-[30px]">{props.title}</h1>
            <p className="p-1 m-2">{props.content}</p>
            <div className="flex bg-gray-300 p-1 justify-around rounded w-full sm:w-1/2 border-b-2 border-black">
                <div>
                    <HandThumbUpIcon onClick={handleLike} className={`w-[20px] hover:cursor-[pointer] ${liked?"text-[blue]":""}`}/>
                    <label>{likes}</label>
                </div>
                <div onClick={handleCommentVision}>
                    <ChatBubbleLeftIcon className={`w-[20px] hover:cursor-[pointer] ${commentOpen?"text-[#f63ad9]":""}`}/>
                    <label>{props.commentsCount}</label>
                </div>
                <div>
                    <ShareIcon className="w-[20px] hover:text-[#f72fd9] hover:cursor-[pointer]"/>
                    <label>{props.shares}</label>
                </div>
            </div>
            <div>
                <Comments comments={props.comments} commentOpen={commentOpen} commentsCount={props.commentsCount}/>
            </div>
        </div>
    )
}
export default Article;