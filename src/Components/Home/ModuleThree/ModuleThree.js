import React from 'react';
import {Link} from "react-router-dom";
import './module-three.css';

function ModuleThree({dataPosts}) {
    const data = dataPosts
    return (
            <div className="module module-3">
                <div className="module-heading heading-style-1">
                    <h2 className="heading heading-title">
                    new releases
                    </h2>
                </div>
                <div className="module__inner">
                    <div className="posts-list flex-box flex-box-3i flex-space-20">
                        {
                            data.slice(20,23).map((post, index)=>(
                                <div className="list-item" key={index}>
                                    <article className="post post--overlay post--overlay-hover">
                                        <div className="post__thumb object-fit">
                                            <Link to={`/single/${post.id}`}>
                                                    <img src={post.imgUrl} alt="img" />
                                            </Link>
                                        </div>
                                        <div className="post__text">
                                            <div className="post__text-wrap">
                                                <div className="post__text-inner">
                                                    <div className="post__meta">
                                                        <div className="author author-style-3">
                                                            <Link to={`/single/${post.id}`} className="author-avatar">
                                                                <img src={post.author.authorImg} alt="author"/>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <h3 className="post__title f-28 f-w-900 line-clamp line-clamp-3">
                                                        <Link to={`/single/${post.id}`}>
                                                            {post.title}
                                                        </Link>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                        <Link to={`/category/${post.category}`} className="post__cat post__cat-bg post__cat-position">
                                            {post.category}
                                        </Link>
                                    </article> 
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
    )
}

export default ModuleThree
