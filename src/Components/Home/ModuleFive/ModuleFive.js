import React from 'react';
import {Link} from "react-router-dom";
import './module-five.css';
import HTMLReactParser from 'html-react-parser';

function ModuleFive({dataPosts}) {
    const data = dataPosts;
    return (
        <div className="module module-5">
            <div className="module-heading heading-style-1">
                <h2 className="heading heading-title">
                Editor's Choice
                </h2>
            </div>
            <div className="module__inner flex-box">
                <div className="section-main">
                    {
                       data.filter(post => post.id === "5").map((post, index) =>(
                           <article className="post post--overlay post--overlay-large" key={index}>
                                <div className="post__thumb object-fit">
                                    <Link to={`/single/${post.id}`}>
                                        <img src={post.imgUrl} alt="img" />
                                    </Link>
                                </div>
                                <div className="post__text text-center mh-950">
                                    <div className="post__text-wrap">
                                        <div className="post__text-inner">
                                        <h3 className="post__title f-36 f-w-900 line-clamp line-clamp-2">
                                        <Link to={`/single/${post.id}`}>
                                           {post.title}
                                        </Link>
                                    </h3>
                                    <div className="post__excerpt line-clamp line-clamp-2 f-16 f-w-400">
                                        {HTMLReactParser(post.content)}
                                    </div>
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
                       )) 
                    }
                </div>
                <div className="section-sub">
                    <div className="posts-list flex-box flex-box-1i flex-space-40">
                        {
                            data.filter(post => post.category === "Nature").slice(0,3).map((post,index) => (
                                <div className="list-item" key={index}>
                                    <article className="post post--horizontal post--horizontal-hover style-2">
                                        <div className="post__thumb object-fit">
                                            <Link to={`/single/${post.id}`}>
                                                <img src={post.imgUrl} alt="img" />
                                            </Link>
                                        </div>
                                        <div className="post__text">
                                            <Link to={`/category/${post.category}`} className="post__cat post__cat-bg">
                                                {post.category}
                                            </Link>
                                            <h3 className="post__title f-24 f-w-900 line-clamp line-clamp-2">
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
        </div>
    )
}

export default ModuleFive
