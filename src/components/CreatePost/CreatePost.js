import React, { useState } from 'react';
import "./CreatePost.css";

const CreatePost = (props) => {
    const [content, setContent] = useState('');

    const handleSubmit = () => {
        props.onSubmit(content);
        setContent('');
    }

    return (
        <div className="postBox">
            <input
                type="text"
                placeholder="What's on your mind?"
                value={content}
                onChange={e => setContent(e.target.value)}
            />
            <button type="submit" onClick={handleSubmit} className="postButton">
                Post
            </button>
        </div>
    );
}

export default CreatePost;