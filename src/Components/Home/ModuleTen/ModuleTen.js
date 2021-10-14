import React from 'react';
import './module-ten.css';
import {Link} from 'react-router-dom';
import { ReactComponent as Square } from '../Icon/square.svg';
import HTMLReactParser from 'html-react-parser';

function ModuleTen({dataPosts}) {
    const data = dataPosts;
    return (
        <div className="module module-10">
            <div className="module-heading flex-box heading-style-1">
                <h2 className="heading heading-title">
                Lasted news
                </h2>
            </div>
            <div className="module__inner flex-box">
                <div className="section-main">
                    {
                        data.filter(post => post.id === "37").map((post, index) => (
                            <article className="post post--vertical post--vertical-special" key={index}>
                                <div className="post__thumb object-fit">
                                    <Link to={`/single/${post.id}`}>
                                        <img src={post.imgUrl} alt="img" />
                                    </Link>
                                </div>
                                <div className="post__text">
                                    <div className="post__meta">
                                        <div className="post__meta-left">
                                            <Link to={`/category/${post.category}`} className="post__cat">
                                                {post.category}
                                            </Link>
                                            <div className="author author-style-2">
                                                <Square/>
                                                <Link to={`/single/${post.id}`} className="author-name f-14 f-w-400">
                                                {post.author.authorName}
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="post__meta-right">
                                            <time className="time published" dateTime="2019-03-06T08:45:23+00:00" title="March 6, 2019 at 8:45 am"> {post.time} </time>
                                        </div>
                                    </div>
                                    <h3 className="post__title f-36 f-w-900 line-clamp line-clamp-2">
                                        <Link to={`/single/${post.id}`}>
                                           {post.title}
                                        </Link>
                                    </h3>
                                    <div className="post__excerpt line-clamp line-clamp-2 f-16 f-w-400">
                                        {HTMLReactParser(post.content)}
                                    </div>
                                </div>
                            </article>
                        ))
                    }
                </div>
                <div className="section-sub">
                    <div className="section-sub__inner">
                        <div className="posts-list">
                            {
                                data.filter(post => post.category ==="Animal").slice(0,8).map((post,index)=>(
                                    <div className="list-item" key={index}>
                                        <article className="post post--vertical post--vertical-scroll">
                                            <div className="post__text-top post__text">
                                                <Link to={`/category/${post.category}`} className="post__cat">
                                                    {post.category}
                                                </Link>
                                                <h3 className="post__title f-22 f-w-900 line-clamp line-clamp-2">
                                                    <Link to={`/single/${post.id}`}>
                                                    {post.title}
                                                    </Link>
                                                </h3>
                                            </div>
                                            <div className="post__thumb object-fit">
                                                <Link to={`/single/${post.id}`}>
                                                    <img src={post.imgUrl} alt="img" />
                                                </Link>
                                            </div>
                                            <div className="post__text post__text-bottom">
                                                <time className="time published" dateTime="2019-03-06T08:45:23+00:00" title="March 6, 2019 at 8:45 am"> {post.time} </time>
                                                <div className="post__readmore post__readmore-style-2">
                                                    <Link to={`/single/${post.id}`}>
                                                        Read more
                                                    </Link>
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
        </div>
    )
}

export default ModuleTen
