import React from 'react';
import {Link} from "react-router-dom";
import './module-eight.css'

function ModuleEight({dataPosts}) {
    const data = dataPosts;
    return (
        <div className="module module-8">
            <div className="module__inner">
                <div className="posts-list flex-box flex-box-4i flex-space-20-50">
                {
                       data.filter(post => post.category === "Beach").slice(1,9).map((post, index) =>(
                           <div className="list-item" key={index}>
                               <article className="post post--overlay post--overlay-large">
                                    <div className="post__thumb object-fit">
                                        <Link to={`/single/${post.id}`}>
                                            <img src={post.imgUrl} alt="img" />
                                        </Link>
                                    </div>
                                    <div className="post__text text-center">
                                        <div className="post__text-wrap">
                                            <div className="post__text-inner">
                                            <h3 className="post__title f-18 f-w-900 line-clamp line-clamp-2">
                                            <Link to={`/single/${post.id}`}>
                                            {post.title}
                                            </Link>
                                        </h3>
                                        <div className="post__meta">
                                            <div className="author author-style-1">
                                                <Link to={`/single/${post.id}`} className="author-avatar">
                                                    <img src={post.author.authorImg} alt="author"/>
                                                </Link>
                                            </div>
                                            <time className="time published" dateTime="2019-03-06T08:45:23+00:00" title="March 6, 2019 at 8:45 am"> {post.time} </time>
                                        </div>
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

export default ModuleEight
