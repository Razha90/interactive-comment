function CommentDelete({deleteComment, reply, setReply}) {
    const sentDelete = () => {
        if (reply.myType === 'comment') {
            deleteComment(reply.id , reply.myType);
        setReply(null);
        } else {
            deleteComment(reply.id , reply.myType);
            setReply(null);
        }
    }
    const cancelDelete = () => {
        setReply(null);
    }
    return (
        <div className="comment-delete">
            <div className="delete-wrapper">
                <h2>Delete comment</h2>
                <p>Are you sure you want to delete this comment? This will remove the comment and
                    can't be undone.
                </p>
                <div>
                    <button onClick={cancelDelete}>NO, CANCEL</button>
                    <button onClick={sentDelete}>YES , DELETE</button>
                </div>
            </div>
            <div className="black-screen"></div>
        </div>
    )
}

export default CommentDelete;