import CommentBtn from "./commentBtn";

function CommentVote({
    commentData,
    setReply,
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
            setReply={setReply}
            varType={varType}
            />
        </div>
        </div>
    )
}

export default CommentVote;