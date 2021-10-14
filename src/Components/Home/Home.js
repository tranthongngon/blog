import React,{useState, useEffect} from 'react';
import PostController from '../../Controller/PostController';
import ModuleOne from './ModuleOne/ModuleOne';
import ModuleTwo from "./ModuleTwo/ModuleTwo";
import ModuleThree from './ModuleThree/ModuleThree';
import ModuleFour from './ModuleFour/ModuleFour';
import ModuleFive from './ModuleFive/ModuleFive';
import ModuleSix from './ModuleSix/ModuleSix';
import ModuleSeven from './ModuleSeven/ModuleSeven';
import ModuleEight from './ModuleEight/ModuleEight';
import loadingIMG from "../Home/Image/loading.gif";
import ModuleNine from './ModuleNine/ModuleNine';
import ModuleTen from './ModuleTen/ModuleTen';
import '../Editor/editor.css';
import '../AllBlogPosts/loading.css';
import './home.css';


function Home() {
    const [posts, setposts] = useState([]);
    const [loading, setloading] = useState(false)

    useEffect(() => {
        const fetchPost = async ()=>{
            setloading(true)
            PostController.getAllPost()
            .then(posts => {
                setposts(posts);
                setloading(false);
            }).catch(error => {
                console.log(error);
            });  
        }
        fetchPost();
      }, []);

      const dataChildren = posts.slice(0,5);
      document.title = "Viric"

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
                <div className="site-content">
                    <ModuleOne dataPosts={posts}/>
                    <ModuleTwo dataPosts={posts}/>
                    <ModuleThree dataPosts={posts}/>
                    <ModuleFour dataPosts={posts}/>
                    <ModuleFive dataPosts={posts}/>
                    <ModuleSix dataPosts={posts}/>
                    <ModuleSeven dataPosts={posts}/>
                    <ModuleEight dataPosts={posts}/>
                    <ModuleNine dataChildren={dataChildren} dataPosts={posts}/>
                    <ModuleTen dataPosts={posts}/>
                </div>
            )}
        </div>

    )
}

export default Home
