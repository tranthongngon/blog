import React,{useState} from 'react';
import {Link} from "react-router-dom";
import './module-two.css';

function ModuleTwo({dataPosts}) {
    const categories = ["Beauty","Travel","Animal","Nature","Beach"];
    const [dataCategory, setdataCategory] = useState(categories[0])
    const hanlerClick = (e) => {
        e.preventDefault();
        setdataCategory(e.target.innerText);    
    }
    const data = dataPosts;
    return (
        <div className="module module-2">
            <div className="module-heading flex-box heading-style-1">
                <h2 className="heading heading-title">
                Popular Categories
                </h2>
                <ul className="list-categories flex-box">
                    {
                        categories.map((category, index) => (
                        <li key = {index}>
                            <p  onClick={hanlerClick} className={category === dataCategory ? "active" : ""}>
                             {category}
                            </p>
                        </li>)
                    )
                    }
                </ul>
            </div>
            <div className="module__inner">
                <div className="posts-list flex-box flex-box-4i flex-space-20">
                    {
                         data.filter(post => post.category === dataCategory).slice(0,8).map((post, index) => (
                            <div className="list-item" key={index}>
                                <article className="post post--vertical post--vertical-category">
                                    <div className="post__thumb object-fit">
                                        <Link to={`/single/${post.id}`}>
                                                <img src={post.imgUrl} alt="img" />
                                        </Link>
                                    </div>
                                    <div className="post__text">
                                        <h3 className="post__title f-22 f-w-800 line-clamp line-clamp-3">
                                            <Link to={`/single/${post.id}`}>
                                                {post.title}
                                            </Link>
                                        </h3>
                                        <div className="post__meta">
                                            <div className="author author-style-1">
                                                <Link to={`/single/${post.id}`} className="author-avatar">
                                                    <img src={post.author.authorImg} alt="author"/>
                                                </Link>
                                            </div>
                                            <time className="time published" dateTime="2019-03-06T08:45:23+00:00" title="March 6, 2019 at 8:45 am"> {post.time} </time>
                                        </div>
                                    </div>
        
                                </article>
                            </div>
                         ))
                    }
                </div>
            </div>
            
        </div>
    )
}

export default ModuleTwo
