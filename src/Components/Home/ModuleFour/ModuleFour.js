import React,{useContext} from 'react';
import {DataContext} from "../DataPosts";
import {Link} from "react-router-dom";
import './module-four.css'


function ModuleFour() {
    const data = useContext(DataContext);
    return (
        <div className="module module-4">
            <div className="module__inner">
                <div className="posts-list flex-box flex-box-3i flex-space-40">
                    {
                        data.posts.filter(post => post.category === "Animal").slice(0,6).map((post,index) => (
                            <div className="list-item" key={index}>
                                <article className="post post--horizontal post--horizontal-hover">
                                    <div className="post__thumb object-fit">
                                        <Link to={`/single/${post.id}`}>
                                            <img src={post.imgUrl} alt="img" />
                                        </Link>
                                    </div>
                                    <div className="post__text">
                                        <h3 className="post__title f-20 f-w-700 line-clamp line-clamp-2">
                                            <Link to={`/single/${post.id}`}>
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <div className="post__meta">
                                            <time className="time published" dateTime="2019-03-06T08:45:23+00:00" title="March 6, 2019 at 8:45 am"> {post.time} </time>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ModuleFour
