import React, {useEffect, useState} from 'react';
import PostController from '../../Controller/PostController';
import loadingIMG from "../Home/Image/loading.gif";
import OnePost from '../AllBlogPosts/OnePost';
import Pagination from "../AllBlogPosts/Pagination"
import "../Editor/editor.css";
import "../AllBlogPosts/loading.css";
import './search.css';
import ImgSearch from "../image/search.png";

function Search({ match }) {
    const [posts, setposts] = useState([]);
    const [loading, setloading] = useState(false);
    const [currentPage,setcurrentPage] = useState(1);
    const [postPerPage] = useState(8);
    useEffect(() => {
        const fetchPost = async ()=>{
            setloading(true)
            PostController.getAllPost()
            .then(posts => {
                setposts(posts.filter(post => String(post.title).toLowerCase().includes(String(match.params.result).toLowerCase()) === true));
                setloading(false);
                setcurrentPage(1)
            }).catch(error => {
                console.log(error);
            });  
        }
        fetchPost();
      }, [match.params.result]);

    //Get current post
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)  

    //Change Pgae 
    const paginate = pageNumber => setcurrentPage(pageNumber);
    return (
        <div className="search-page">
           {loading ? (
            <div className="site-content">
                <div className="loading">
                    <img src={loadingIMG} alt="loading"/>
                    <p>
                        Please Wait...
                    </p>
                </div>
            </div>) : (
               <div className="site-content all-blogs-result">
                    <h2 className="search-for">Search Results For: <p>{match.params.result}</p> </h2>
                    {posts.length === 0 ? (<div className="not-found">
                    <p>We didn't find any results</p>
                    <img src={ImgSearch} alt="no result"/>
                    </div>) : (
                        <div>
                            <OnePost posts={currentPosts} />
                            {posts.length > 8 ? <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} currentPage={currentPage}/>: ""}
                        </div>
                    )}
                    
               </div>
            )}

        </div>
    )
}

export default Search
