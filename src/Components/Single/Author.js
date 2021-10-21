import React from "react";
import { Link } from "react-router-dom";

function Author({ singlePost }) {
    const post = singlePost;
    return (
        post.map((p,i) => (
            <div className="author-box" key={i}> 
                <div className="author-box-avatar">
                    <Link to={`/author/${p.author.authorName}`}>
                        <img
                            src={p.author.authorImg}
                            alt={p.author.authorName}
                        />
                    </Link>
                </div>
                <div className="author-box-text">
                    <Link
                        to={`/author/${p.author.authorName}`}
                        className="author-box-name"
                    >
                        {p.author.authorName}
                    </Link>
                    <p className="author-bio">{p.author.authorBio}</p>
                </div>
            </div>
        ))
    );
}

export default Author;
