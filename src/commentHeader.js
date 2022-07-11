import CommentBtn from "./commentBtn";

function CommentHeader({
    commentData,
    reply,
    setReply,
    valueEdit,
    setValueEdit,
    varType,
}) {
    return (
        <div className="comment-header-wrapper">
            <div className="comment-header">
                <div className={`${commentData.user.username}`}></div>
                <div className='username'>{commentData.user.username} {commentData.user.username === 'juliusomo' ? <span className='currentUser'>you</span> : ''} </div>
                <div>{commentData.createdAt}</div>
            </div>
            <div className="comment-header-pc">
            <CommentBtn 
            commentData={commentData}
            reply={reply}
            setReply={setReply}
            valueEdit={valueEdit}
            setValueEdit={setValueEdit}
            varType={varType}
            />
            </div>
        </div>
    )
}

export default CommentHeader;