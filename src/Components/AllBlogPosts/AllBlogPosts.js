import React,{useEffect, useState} from 'react'
import Pagination  from './Pagination';
import PostController from '../../Controller/PostController';
import OnePost from './OnePost';
import loadingIMG from "../Home/Image/loading.gif";
import "../Editor/editor.css";
import './loading.css';

function AllBlogPosts() {
    const [posts, setposts] = useState([]);
    const [loading, setloading] = useState(false);
    const [currentPage,setcurrentPage] = useState(1);
    const [postPerPage] = useState(12);
    useEffect(() => {
        const fetchPost = async ()=>{
            setloading(true)
            PostController.getAllPost()
            .then(posts => {
                setposts(posts.filter(post => post.id !== undefined));
                setloading(false);
            }).catch(error => {
                console.log(error);
            });  
        }
        fetchPost();
      }, []);
      document.title ="Viric - All Blog Posts";

    //Get current post
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)  

    //Change Pgae 
    const paginate = pageNumber => setcurrentPage(pageNumber);

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
            </div>) : (
               <div className="site-content all-blogs">
                    <OnePost posts={currentPosts} />
                    <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} currentPage={currentPage}/>
               </div>
            )}
        </div>
    )
}

export default AllBlogPosts
