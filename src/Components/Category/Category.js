import React ,{ useState, useEffect }from 'react';
import loadingIMG from "../Home/Image/loading.gif";
import PostController from '../../Controller/PostController';
import '../Editor/editor.css';
import '../AllBlogPosts/loading.css';
import OnePost from '../AllBlogPosts/OnePost';
import Pagination from '../AllBlogPosts/Pagination'

function Category({match}) {
    const [loading, setloading] = useState(false);
    const [posts, setposts] = useState([]);
    const [currentPage,setcurrentPage] = useState(0);
    const [postPerPage] = useState(8);
    useEffect(() => {
        const fetchPosts = async () => {
            setloading(true)
            setcurrentPage(1)
            PostController.getAllPost()
            .then(posts =>{
                setposts(posts.filter(post => post.category === `${match.params.type}`))
                setloading(false);
            })
        }
        fetchPosts();
    }, [match.params.type]);
    document.title = "Viric-" + match.params.type;
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

export default Category
