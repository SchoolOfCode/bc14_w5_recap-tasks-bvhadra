import BlogPost from "../BlogPost/index.js";
import Comment from "../Comment/index.js";
import CommentForm from "../CommentForm/index.js";
import CommentList from "../CommentList/index.js";


function App() {
  return (
    <div>
      <BlogPost />
      <Comment 
      name = "Bidhan"
      text = "react aint that bad" />
      <CommentList />
      <CommentForm />
    </div>
  )
}

export default App;
