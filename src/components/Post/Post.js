import "./Post.css";

const Post = (props) => {
    return (
        <li className="singlePost">{props.post}</li>
    );
}

export default Post;