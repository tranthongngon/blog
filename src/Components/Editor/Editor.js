import React, {useState} from 'react';
import PostController from '../../Controller/PostController';
import './editor.css';
import loading from "../Home/Image/loading.gif"

const Editor = () => {

    const [processing, setProcessing] = useState(false);
    const [data, setdata] = useState({authorImg:"",authorName:"",authorBio:"",content:"",title:"",category:"",tags:"",imgUrl:""})

    const onSubmit = (e) => {
        e.preventDefault();
        setProcessing(true);
        for(let i = 51 ; i <= 53; i++) {
            PostController.createPost(`${data.authorImg}`, `${data.authorName}`,`${data.authorBio}`,`${data.content}`, `${data.title}`, `${i}`, `${data.category}`, [...data.tags.split(",")], `${data.imgUrl}`)
        .then(r => {
            setProcessing(false);
            setdata({authorImg:"",authorName:"",authorBio:"",content:"",title:"",id:"",time:"",category:"",tags:"",imgUrl:""})
        })
        }
    };

    return (
        
        <div className="add-data">
            {processing ? 
            (
            <div className="loading">
                <img src={loading} alt="loading"/>
                <p>
                    Please Wait...
                </p>
            </div>) : 
            (
                <div className="form-submit">
                    <form onSubmit={onSubmit}>
                        <div className="author-name">
                            <label>
                                Author Name
                            </label>
                            <input type="text" placeholder="authorName" value={data.authorName} onChange={e => setdata({...data, authorName:e.target.value})}/>
                        </div>
                        <div className="author-img">
                            <label>
                                Author Image
                            </label>
                            <input type="text" placeholder="authorImg" value={data.authorImg} onChange={e => setdata({...data, authorImg:e.target.value})}/>
                        </div>
                        <div className="author-bio">
                            <label>
                                Author Bio
                            </label>
                            <input type="text" placeholder="authorBio" value={data.authorBio} onChange={e => setdata({...data, authorBio:e.target.value})}/>
                        </div>
                        <div className="title">
                            <label>
                                Title
                            </label>
                            <input type="text" placeholder="title" value={data.title} onChange={e => setdata({...data, title:e.target.value})}/>
                        </div>
                        <div className="category">
                            <label>
                                Category
                            </label>
                            <input type="text" placeholder="category" value={data.category} onChange={e => setdata({...data,category:e.target.value})}/>
                        </div>
                        <div className="author-tags">
                            <label>
                                Tags
                            </label>
                            <input type="text" placeholder="tags" value={data.tags} onChange={e => setdata({...data,tags:e.target.value})}/> 
                        </div>
                        <div className="img-url">
                            <label>
                            Image URL
                            </label>
                            <input type="text" placeholder="imgUrl"  value={data.imgUrl} onChange={e => setdata({...data, imgUrl:e.target.value})}/>
                        </div>
                        <div className="content">
                            <label>
                                Content
                            </label>
                            <textarea type="text" placeholder="content" value={data.content} onChange={e => setdata({...data, content:e.target.value})} rows="10"/>
                        </div>
                        <div className="submit-data">
                            <button type="submit" className="btn-submit">Submit</button>
                        </div>
                    </form>
                </div>
            ) 
        }
            
        </div>
    );
};

export default Editor;