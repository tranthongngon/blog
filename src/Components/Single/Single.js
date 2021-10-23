import React, { useState, useEffect } from 'react';
import loadingIMG from "../Home/Image/loading.gif";
import PostController from '../../Controller/PostController';
import '../Editor/editor.css';
import '../AllBlogPosts/loading.css';
import './single.css';
import { FacebookProvider, Comments } from 'react-facebook';
import Content from './Content';
import HeadSingle from './HeadSingle';
import FooterSingle from './FooterSingle';
import Author from './Author';
import NavigationPosts from './NavigationPosts';
import Related from './Related';


function Single({ match }) {
    const [post, setpost] = useState([]);
    const [posts, setposts] = useState([]);
    const [relatedPost, setrelatedPost] = useState([]);
    const [loading, setloading] = useState(false);
    const [prevPost, setprevPost] = useState([]);
    const [nextPost, setnextPost] = useState([]);
    useEffect(() => {
        const fetchPost = async () => {
            setloading(true)
            PostController.getAllPost()
                .then(posts => {
                    setposts(posts);
                    setpost(posts.filter(post => post.id === `${match.params.id}`))
                    setnextPost(posts.filter(post => post.id === (parseInt(match.params.id) + 1).toString()));
                    setprevPost(posts.filter(post => post.id === (parseInt(match.params.id) - 1).toString()));
                    document.title = `Viric-` + posts.filter(post => post.id === `${match.params.id}`).map(post => (
                        post.title
                    ));
                    setrelatedPost(posts.filter(post => post.category === `${posts.filter(post => post.id === `${match.params.id}`).map(p=>(p.category))[0]}`))
                    console.log(posts.filter(post => post.category === `${posts.filter(post => post.id === `${match.params.id}`).map(p=>(p.category))[0]}`));
                    setloading(false);
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
                        <img src={loadingIMG} alt="loading" />
                        <p>
                            Please Wait...
                        </p>
                    </div>
                </div>) : (<div className="site-content">
                    {
                        <div className="single-entry">

                            <HeadSingle singlePost={post} />
                            <article className="post post-single">
                                <div className="single-content">
                                    <Content singlePost={post} />

                                    <FooterSingle singlePost={post} />

                                    <Author singlePost={post} />

                                    <NavigationPosts prevPost={prevPost} nextPost={nextPost} />
                                    
                                    <div className="comment-area">
                                        <FacebookProvider appId="366012431934183">
                                            <Comments href={window.location.href}/>
                                        </FacebookProvider>
                                    </div>

                                </div>
                            </article>
                            <Related dataPosts = {relatedPost}/>
                        </div>
                    }
                </div>)}
        </div>
    )
}

export default Single
