import React from "react";
import HTMLReactParser from 'html-react-parser';

function Content({singlePost}) {
    const post = singlePost;
    return (
        post.map((p,i)=>(
            <div className="single-body" key={i}>{HTMLReactParser(p.content)}</div>
        ))
    );
}

export default Content;
