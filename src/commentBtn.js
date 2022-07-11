import {ReactComponent as ImgEdit} from './images/icon-edit.svg';
import {ReactComponent as ImgRep} from './images/icon-reply.svg';
import {ReactComponent as ImgDel} from './images/icon-delete.svg';

function CommentBtn({
    commentData,
    reply,
    setReply,
    valueEdit,
    setValueEdit,
    varType,
}) {
    const currentUser = 'juliusomo'; 
    const isUser = commentData.user.username === currentUser;
    const isNotUser = commentData.user.username !== currentUser;
    return (
        <div className='comment-button'>
            {
                isNotUser &&
                <button onClick={() => setReply({id:commentData.id,type:'reply',myType:varType})}><ImgRep/> <span>Reply</span></button>
            }
            {
                isUser && 
                <button onClick={() => setReply({id:commentData.id, type:'delete', myType:varType})}><ImgDel/> <span className='button-delete'>Delete</span></button>
            }
            {
                isUser && 
                <button onClick={() => setReply({id:commentData.id,type:'edit', myType:varType})}><ImgEdit /> <span>Edit</span></button>
                 
            }
  
        </div>
    )
}

export default CommentBtn;