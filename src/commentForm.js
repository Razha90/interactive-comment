import {useState} from 'react';

function CommentForm({
    commentForm,
    reply,
    setReply,
    submitlabel,
    commentData,
    updateReplies,
}) {
  const [text, setText] = useState(null);

    const clickAdd = () => {

     if (text === null) {
      alert('Please add Your Comment !!')
     } else {
      if (submitlabel === 'SEND') {
        commentForm(text,'Comment', '');
        document.getElementsByClassName('myForm')[0].value = '';
        setText(null);
       }
       if (submitlabel === 'REPLY' && reply.myType === 'comment') {
          let myUpdate = {
              id: Math.floor(Math.random() * 100) + 5,
              content: text,
              createdAt: "0 second ago",
              score: 0,
              replyingTo: commentData.user.username,
              user: {
                image: { 
                  png: "./images/avatars/image-ramsesmiron.png",
                  webp: "./images/avatars/image-ramsesmiron.webp"
                },
                username: "juliusomo"
              }
            }
        updateReplies(myUpdate, commentData.id);
        document.getElementsByClassName('myForm')[0].value = ''; 
        setText(null);
        setReply(null);
       }
       if (submitlabel === 'REPLY' && reply.myType === 'reply') {
        let myUpdate = {
          id:  Math.floor(Math.random() * 100) + 5,
          content: text,
          createdAt: "1 week ago",
          score: 0,
          replyingTo: commentData.user.username,
          user: {
            image: { 
              png: "./images/avatars/image-ramsesmiron.png",
              webp: "./images/avatars/image-ramsesmiron.webp"
            },
            username: "juliusomo"
          }
        }
    updateReplies(myUpdate, 2);
    document.getElementsByClassName('myForm')[0].value = ''; 
    setText(null);
    setReply(null);
       }
     }

      } 

    return (
        <div className="comment comment-form">
            <div className="juliusomo"></div>
            <textarea placeholder="Add a comment"  onChange={(e) => setText(e.target.value)} className='myForm'/>
            <button onClick={clickAdd} className='button-form'>{submitlabel}</button>
        </div>
    )
}

export default CommentForm;