import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataPosts';
import { ReactComponent as Next } from '../Icon/next.svg';
import { ReactComponent as Square } from '../Icon/square.svg';
import './module-one.css';
import HTMLReactParser from 'html-react-parser'
import { memo } from 'react';

function ModuleOne(props) {
   
    const data = useContext(DataContext);
    return (
        <div className="module module-1"> 
            <div className="module__inner flex-box">
                <div className="section-main">
                    {
                       data.posts.filter(post => post.id === "1").map((post, index) =>(
                           <article className="post post--overlay post--overlay-large" key={index}>
                                <div className="post__thumb object-fit">
                                    <Link to={`/single/${post.id}`}>
                                        <img src={post.imgUrl} alt="img" />
                                    </Link>
                                </div>
                                <div className="post__text text-center">
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
                    <div className="posts-list flex-box flex-box-2i flex-space-20"> 
                    {
                        data.posts.filter(post => 10 <= parseInt(post.id) && parseInt(post.id) <= 11).map((post, index) => (
                            <div className="list-item" key={index}>
                                <article className="post post--vertical post--vertical-medium">
                                    <div className="post__thumb object-fit">
                                        <Link to={`/single/${post.id}`}>
                                            <img src={post.imgUrl} alt="img" />
                                        </Link>
                                        <Link to={`/category/${post.category}`} className="post__cat post__cat-bg post__cat-position">
                                            {post.category}
                                        </Link>
                                    </div>
                                    <div className="post__text">
                                        <div className="post__meta-top">
                                            <div className="author author-style-2">
                                                <Square/>
                                                <Link to={`/single/${post.id}`} className="author-name f-14 f-w-400">
                                                {post.author.authorName}
                                                </Link>
                                            </div>
                                        </div>
                                        <h3 className="post__title line-clamp line-clamp-3 f-24 f-w-900">
                                            <Link to={`/single/${post.id}`}>
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <div className="post__meta-bottom post__meta">
                                            <time className="time published" dateTime="2019-03-06T08:45:23+00:00" title="March 6, 2019 at 8:45 am"> {post.time} </time>
                                            <div className="post__readmore post__readmore-style-1">
                                                <Link to={`/single/${post.id}`}>
                                                    <Next/>
                                                </Link>
                                            </div>
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

export default memo(ModuleOne);
