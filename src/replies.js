import CommentVote from "./commentVote";
import CommentHeader from "./commentHeader";
import CommentForm from "./commentForm";
import {useState} from 'react';
import CommentDelete from "./commentDelete";

function Reply({
    commentData,
    reply,
    setReply,
    updateReplies,
    deleteComment,
}) {
    const [getData , setGetData] = useState(commentData.content);

    const isReplying = reply && reply.id === commentData.id && reply.type === 'reply' && reply.myType === 'reply';
    const isEditing = reply && reply.id === commentData.id && reply.type === 'edit' && reply.myType === 'reply';
    const isDelete = reply && reply.id === commentData.id && reply.type === 'delete' && reply.myType === 'reply';

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


    return (
        <div>
            <div className="comment">
            <CommentVote 
            commentData={commentData}
            />
            <div className="comment-body">
            <CommentHeader
            commentData={commentData}
            reply={reply}
            setReply={setReply}
            varType='reply'
            />
            {
                isEditing === true ? <div className="comment-edit"><textarea value={getData} onChange={(e) => setGetData(e.target.value)} className='box-edit'/><button onClick={updateEditing}>UPDATE</button></div> : <div> <span className="isReplying">@{commentData.replyingTo}</span> {commentData.content}</div>
            }
           </div>
        </ div>
        {
            isReplying &&
            <CommentForm 
            submitlabel='REPLY'
            commentData={commentData}
            reply={reply}
            setReply={setReply}
            updateReplies={updateReplies}
            />
        }

        {
            isDelete &&
            <CommentDelete 
            reply={reply}
            setReply={setReply}
            deleteComment={deleteComment}
            />
        }
        </div>
    )
}

export default Reply;