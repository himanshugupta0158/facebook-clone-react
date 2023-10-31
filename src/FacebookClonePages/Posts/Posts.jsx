import React, { useState, useEffect } from 'react';
import './Posts.css';
import { db } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';
import { ImageUpload } from './ImageUpload';
import { Post } from './Post';

export const Posts = ({ user }) => {

    const navigate = useNavigate('');

    const [posts, setPosts] = useState([]);

    // useEffect let us use whatever we have putted in it , when we load this jsor jsx file via a route at least once.
    useEffect(() => {
        // Getting all information from database and assigning to post variable.
        db.collection('posts').onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map(
                doc => ({
                    id: doc.id,
                    post: doc.data()
                })
            ))
        })
    }, []);

  return (
    <div className="posts">
        <ImageUpload username={user?.displayName} />

        {
            posts.map(({id, post}) => (
                <Post 
                    key={id}
                    postId={id}
                    origuser={user?.displayName}
                    username={post.username}
                    userId={user.userId}
                    caption={post.caption}
                    imageUrl={post.imageUrl}
                    noLikes={post.noLikes}
                />
            ))
        }

    </div>
  )
};
