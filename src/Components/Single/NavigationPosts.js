import React from 'react';
import {Link} from "react-router-dom";

function NavigationPosts({prevPost,nextPost}) {
    const prevP = prevPost;
    const nextP = nextPost;
    return (
        <div className="posts-naviagtion">
            {prevP.length === 0 ? "" : (<div className="prev-naviagtion-posts">
                {prevP.map((prevP, index) => (
                    <article className="post post--horizontal post--horizontal-reverse post--horizontal-nav" key={index}>
                        <div className="post__thumb object-fit">
                            <Link to={`/single/${prevP.id}`}>
                                <img src={prevP.imgUrl} alt={prevP.id} />
                            </Link>
                        </div>
                        <div className="post__text">
                            <div className="label-nav">
                                <Link to={`/single/${prevP.id}`}>
                                    Previous
                                </Link>
                            </div>
                            <h3 className="post__title f-22 f-w-700 line-clamp line-clamp-2">
                                <Link to={`/single/${prevP.id}`}>
                                    {prevP.title}
                                </Link>
                            </h3>
                        </div>
                    </article>
                ))}
            </div>)}
            {nextP.length === 0 ? "" : (<div className="next-naviagtion-posts">
                {nextP.map((nextP, index) => (
                    <article className="post post--horizontal post--horizontal-nav" key={index}>
                        <div className="post__thumb object-fit">
                            <Link to={`/single/${nextP.id}`}>
                                <img src={nextP.imgUrl} alt={nextP.id} />
                            </Link>
                        </div>
                        <div className="post__text">
                            <div className="label-nav">
                                <Link to={`/single/${nextP.id}`}>
                                    Next
                                </Link>
                            </div>
                            <h3 className="post__title f-22 f-w-700 line-clamp line-clamp-2">
                                <Link to={`/single/${nextP.id}`}>
                                    {nextP.title}
                                </Link>
                            </h3>
                        </div>
                    </article>
                ))}
            </div>)}
        </div>
    )
}

export default NavigationPosts
