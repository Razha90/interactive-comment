import './App.css';
import data from './data.json';
import {useState, useEffect} from 'react';
import Comment from './comment';
import CommentForm from './commentForm';

function App() {
  // Data Comments
  const [comments , setComments] = useState([]);

  // Set Menu from Reply , delete and  Add .
  const [reply , setReply] = useState(null);

  // Set Chache
  useEffect(() => {
      if (comments.length === 0) {
        setComments(data.comments);
      }
      document.title = 'Interactive Comment Section || FrondEnd Mentor'
  }, []); 

 // Add Comment
const newComment = (text) =>{
  return {
    id: Math.random().toString(36).substr(2, 9),
    content: text,
    createdAt: "0 seconds ago",
    score: 0,
    user: {
      image: { 
        png: "./images/avatars/image-amyrobson.png",
        webp: "./images/avatars/image-amyrobson.webp"
      },
      username: "juliusomo"
    },
    replies: []
  }
}
let commentForm = async (text , type) => {
  if (type === 'Comment') {
    let addComent = newComment(text);
    let updateComment= [...comments , addComent];
    setComments(updateComment);
    setReply(null);
  }
};
/* ------------------------------------- */

 // Add Replies for Comment
let updateReplies = (text, id) => {
  let updateComment = [...comments];
  updateComment.forEach((data) => {
  if (data.id === id) {
    data.replies = [...text];
  }
  });
  setComments(updateComment);
};

// Delete Comment and Delete Reply Comment
let deleteComment = (id , type, parentId) => {
  let updateComment = [...comments]
  let myUpdateReplies = []
  if (type === 'comment') {
    updateComment =updateComment.filter(data => data.id !== id);
  } else {
    comments.forEach((data) => {
      if (data.id === parentId) {
        myUpdateReplies = data.replies.filter(kamu => kamu.id !== id);
        data.replies = myUpdateReplies;
      }
    })
  }
  
  setComments(updateComment);
}

// Return to ./coments
  return ( 
    <main className="App">
      { 
        comments.map(record => 
          <Comment 
          key={record.id}
          commentData={record}
          reply={reply}
          setReply={setReply}
          updateReplies={updateReplies}
          deleteComment={deleteComment}
          />
        )
      }
      <CommentForm
      commentForm={commentForm}
      reply={reply}
      setReply={setReply}
      submitlabel='SEND'
      />
    </main>
  );
}

export default App;
