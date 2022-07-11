import CommentVote from "./commentVote";
import RepliesContainer from "./commentReplies";
import CommentHeader from "./commentHeader";
import CommentForm from "./commentForm";
import {useState} from 'react';
import CommentDelete from "./commentDelete";

function Comment({
    commentData,
    reply,
    setReply,
    commentForm,
    updateReplies,
    deleteComment,
}) {
    const [getData , setGetData] = useState(commentData.content);
   
    const isReplying = reply && reply.id === commentData.id && reply.type === 'reply' && reply.myType === 'comment';
    const isEditing = reply && reply.id === commentData.id && reply.type === 'edit' && reply.myType === 'comment';
    const isDeleting = reply && reply.id === commentData.id && reply.type === 'delete' && reply.myType === 'comment';

    const myUpdateReplies = (newReply, id) => {
        const replies = [...commentData.replies, newReply];
        updateReplies(replies, id);
    }
    
    const updateEditing = () => {
        if (commentData.id === reply.id) {
            if (getData === '' || getData === ' ') {
                alert('Please add Comment!!')
            } else {
                commentData.content = getData ;
            setReply(null);
            }
        }
    }

    const myDeleteComment = (id ,type) => {
        type === 'commment' ? deleteComment(id,type) : deleteComment(id , type , commentData.id);
    }

   return (
        <div className='comment-wrapper'>
            <div className="comment" key={commentData.id}>
            <CommentVote
            commentData={commentData}
            reply={reply}
            setReply={setReply}
            varType='comment'
            />
            <div className="comment-body">
                <CommentHeader
                commentData={commentData}
                setReply={setReply}
                varType='comment'
                />
    
            {
                isEditing === true ? <div className="comment-edit"><textarea value={getData} onChange={(e) => setGetData(e.target.value)} className='box-edit'/><button onClick={updateEditing}>UPDATE</button></div> : <div className="comment-content">{commentData.content}</div>
            }
            </div>
           
        </div>
    
        {
            isReplying &&
            <CommentForm 
            commentData={commentData}
            reply={reply}
            setReply={setReply}
            submitlabel='REPLY'
            commentForm={commentForm}
            updateReplies={myUpdateReplies}
            />
        }
        

        {
            commentData.replies !== [] &&  (
                <RepliesContainer 
                commentData={commentData.replies}
                reply={reply}
                setReply={setReply}
                updateReplies={myUpdateReplies}
                deleteComment={myDeleteComment}
                />)
        }
        {
            isDeleting &&
            <CommentDelete 
            commentData={commentData}
            deleteComment={myDeleteComment}
            reply={reply}
            setReply={setReply}
            />
        }
        </div>

    )
}

export default Comment;