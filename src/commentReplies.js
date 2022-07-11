import Reply from "./replies";

function RepliesContainer({
    commentData,
    reply,
    setReply,
    updateReplies,
    deleteComment,
}) {
    return (
        <div className='reply-container-gap'>
            <div className="reply-container">
            {
                commentData.map(record => 
                    <Reply 
                    commentData={record}
                    reply={reply}
                    setReply={setReply}
                    updateReplies={updateReplies}
                    deleteComment={deleteComment}
                    />)
            }
        </div>
        </div>
    )
}
export default RepliesContainer;
