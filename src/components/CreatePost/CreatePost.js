import React, { useState } from 'react';
import "./CreatePost.css";

const CreatePost = (props) => {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(content);
        setContent('');
    }

    return (
        <form onSubmit={e=> handleSubmit(e)}>
            <div className="postBox">
                <input
                    type="text"
                    className="inputField"
                    placeholder="What's on your mind?"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
                <button onClick={e => handleSubmit(e)} className="postButton">
                    Post
                </button>
            </div>
        </form>
    );
}

export default CreatePost;