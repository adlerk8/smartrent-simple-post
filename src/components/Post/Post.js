import "./Post.css";

const Post = (props) => {
    return (
        <div>
            <li className="singlePost">{props.post}</li>
            <button onClick={() => props.deletePost(props.index)}>X</button>
        </div>
    );
}

export default Post;