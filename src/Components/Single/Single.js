import React, {useState, useEffect} from 'react';
import HTMLReactParser from 'html-react-parser';
import loadingIMG from "../Home/Image/loading.gif";
import PostController from '../../Controller/PostController';
import {Link} from 'react-router-dom'
import '../Editor/editor.css';
import '../AllBlogPosts/loading.css';
import './single.css';

function Single({match}) {
    const [post, setpost] = useState([]);
    const [posts, setposts] = useState([]);
    const [loading, setloading] = useState(false);
    const [prevPost, setprevPost] = useState([]);
    const [nextPost, setnextPost] = useState([]);
    useEffect(() => {
        const fetchPost = async ()=>{
            setloading(true)
            PostController.getAllPost()
            .then(posts => {
                setposts(posts);
                setloading(false);
                setpost(posts.filter(post => post.id === `${match.params.id}`))
                setnextPost(posts.filter(post => post.id === (parseInt(match.params.id) + 1).toString()));
                setprevPost(posts.filter(post => post.id === (parseInt(match.params.id) - 1).toString()));
                document.title = `Viric-` + posts.filter(post => post.id === `${match.params.id}`).map(post=>(
                    post.title
                ));
            }).catch(error => {
                console.log(error);
            });  
        }
        fetchPost();
      }, [match.params.id]);
    return (
        <div>
            {loading ? (
            <div className="site-content">
                <div className="loading">
                    <img src={loadingIMG} alt="loading"/>
                    <p>
                        Please Wait...
                    </p>
                </div>
            </div>) : (<div className="site-content">
                {
                post.map((singlepost, index) => (
                    <div key={index} className="single-entry">
                        <div className="module module-single">
                            <div className="entry-thumb single-thumb">
                                <img src={singlepost.imgUrl} alt={singlepost.id}/>
                            </div>
                            <div className="single-header">
                                <Link to={`/category/${singlepost.category}`} className="post__cat post__cat-bg entry-cat">
                                    {singlepost.category}
                                </Link>
                                <h3 className="entry-title f-44 f-w-900">
                                    {singlepost.title}
                                </h3>
                                <div className="entry-meta">
                                    <div className="entry-author flex-box">
                                        <div className="entry-avatar">
                                            <Link to={`/author/${singlepost.author.authorName}`}>
                                                <img src={singlepost.author.authorImg} alt={singlepost.author.authorName}/>
                                            </Link>
                                        </div>
                                        <div className="entry-name">
                                            <Link to={`/author/${singlepost.author.authorName}`}>
                                                {singlepost.author.authorName}
                                            </Link>
                                            <time className="time published" dateTime="2019-03-06T08:45:23+00:00" title="March 6, 2019 at 8:45 am"> {singlepost.time} </time>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <article className="post post-single">
                            <div className="single-content">
                                <div className="single-body">
                                    {HTMLReactParser(singlepost.content)}
                                </div>
                                <footer className="entry-footer flex-box">
                                    <div className="entry-footer-left">
                                        <ul className="tags-list">
                                            {singlepost.tags.map((tag, index) =>(
                                                <li key={index} className="tag-item">
                                                    <Link to={`/category/${tag}`}>
                                                        #{tag}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="entry-footer-right">
                                        <time className="time published" dateTime="2019-03-06T08:45:23+00:00" title="March 6, 2019 at 8:45 am"> {singlepost.time} </time>
                                    </div>
                                </footer>
                                {/* author */}
                                <div className="author-box">
                                    <div className="author-box-avatar">
                                        <Link to={`/author/${singlepost.author.authorName}`}>
                                            <img src={singlepost.author.authorImg} alt={singlepost.author.authorName}/>
                                        </Link>
                                    </div>
                                    <div className="author-box-text">
                                        <Link to={`/author/${singlepost.author.authorName}`} className="author-box-name">
                                            {singlepost.author.authorName}
                                        </Link>
                                        <p className="author-bio">
                                            {singlepost.author.authorBio}
                                        </p>
                                    </div>
                                </div>

                                <div className="posts-naviagtion">
                                    {prevPost.length === 0 ? "":(<div className="prev-naviagtion-posts">
                                        {prevPost.map((prevPost,index)=>(
                                        <article className="post post--horizontal post--horizontal-reverse post--horizontal-nav" key={index}>
                                            <div className="post__thumb object-fit">
                                                <Link to={`/single/${prevPost.id}`}>
                                                    <img src={prevPost.imgUrl} alt={prevPost.id}/>
                                                </Link>
                                            </div>
                                            <div className="post__text">
                                                <div className="label-nav">
                                                    <Link to={`/single/${prevPost.id}`}>
                                                        Previous
                                                    </Link>
                                                </div>
                                                <h3 className="post__title f-22 f-w-700 line-clamp line-clamp-2">
                                                    <Link to={`/single/${prevPost.id}`}>
                                                        {prevPost.title}
                                                    </Link>
                                                </h3>
                                            </div>
                                        </article>
                                    ))}
                                    </div>)}
                                    {nextPost.length === 0 ? "":(<div className="next-naviagtion-posts">
                                        {nextPost.map((nextPost,index)=>(
                                            <article className="post post--horizontal post--horizontal-nav" key={index}>
                                                <div className="post__thumb object-fit">
                                                    <Link to={`/single/${nextPost.id}`}>
                                                        <img src={nextPost.imgUrl} alt={nextPost.id}/>
                                                    </Link>
                                                </div>
                                                <div className="post__text">
                                                    <div className="label-nav">
                                                        <Link to={`/single/${nextPost.id}`}>
                                                            Next
                                                        </Link>
                                                    </div>
                                                    <h3 className="post__title f-22 f-w-700 line-clamp line-clamp-2">
                                                        <Link to={`/single/${nextPost.id}`}>
                                                            {nextPost.title}
                                                        </Link>
                                                    </h3>
                                                </div>
                                            </article>
                                        ))}
                                    </div>)}  
                                </div>

                                <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-width="" data-numposts="5"></div>
                            </div>
                        </article>
                    </div>
                ))
            }
            </div>)}
        </div>
    )
}

export default Single
