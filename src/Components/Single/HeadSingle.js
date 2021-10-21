import React from 'react';
import { Link } from 'react-router-dom';

function HeadSingle({ singlePost }) {
    const post = singlePost;
    return (
        post.map((p, i) => (
            <div className="module module-single" key={i}>
                <div className="entry-thumb single-thumb">
                    <img src={p.imgUrl} alt={p.id} />
                </div>
                <div className="single-header">
                    <Link to={`/category/${p.category}`} className="post__cat post__cat-bg entry-cat">
                        {p.category}
                    </Link>
                    <h3 className="entry-title f-44 f-w-900">
                        {p.title}
                    </h3>
                    <div className="entry-meta">
                        <div className="entry-author flex-box">
                            <div className="entry-avatar">
                                <Link to={`/author/${p.author.authorName}`}>
                                    <img src={p.author.authorImg} alt={p.author.authorName} />
                                </Link>
                            </div>
                            <div className="entry-name">
                                <Link to={`/author/${p.author.authorName}`}>
                                    {p.author.authorName}
                                </Link>
                                <time className="time published" dateTime="2019-03-06T08:45:23+00:00" title="March 6, 2019 at 8:45 am"> {p.time} </time>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
}

export default HeadSingle
