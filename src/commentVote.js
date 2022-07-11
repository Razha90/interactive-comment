import CommentBtn from "./commentBtn";

function CommentVote({
    commentData,
    reply,
    setReply,
    valueEdit,
    setValueEdit,
    varType,
}) {
    return (
        <div className="comment-footer">
            <div className="comment-vote" key={commentData.id}>
            <div className='button'>+</div>
            <div>{commentData.score}</div>
            <div className='button'>-</div>
        </div>
        <div className="comment-button-pc">
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

export default CommentVote;