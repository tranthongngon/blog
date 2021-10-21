import React from 'react';
import { Link } from 'react-router-dom';

function Related({dataPosts}) {
    const data = dataPosts;
    return (
        <div className="module module-related">
            <div className="module-heading flex-box heading-style-1">
                <h2 className="heading heading-title">
                    Related Posts
                </h2>
            </div>
            <div className="module__inner">
                <div className="posts-list flex-box flex-box-3i flex-space-50">
                    {
                        data.slice(0, 3).map((post, index) => (
                            <div className="list-item" key={index}>
                                <article className="post post--vertical post--vertical-scroll">
                                    <div className="post__text-top post__text">
                                        <Link to={`/category/${post.category}`} className="post__cat">
                                            {post.category}
                                        </Link>
                                        <h3 className="post__title f-24 f-w-900 line-clamp line-clamp-2">
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
    )
}

export default Related
