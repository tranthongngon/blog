import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

function FooterTopRight() {
    const [listImg, setlistImg] = useState([])
    const categories = ["Beauty", "Travel","Beach","Animal","Nature"];
    const key = "4CE87ykK9apxt_Io6MPoRivls-6ylgz2V3R8PHUEJVY";
    const typeImg = "animal";
    useEffect(() => {
        axios.get(`https://api.unsplash.com/photos/random?query=${typeImg}&count=8&client_id=${key}`)
        .then(res =>{
            setlistImg(res.data);
        }).catch(error =>{
            console.log(error);
        })
    }, [])
    return (
        <div className="site-footer-right flex-box flex-box-2i flex-space-30">
            <div className="category-footer">
                <h3 className="title-footer">
                    Categories
                </h3>
                <ul className="list-categories">
                    {categories.map((ctg,index) =>(
                        <li key={index}>
                            <Link to={`/category/${ctg}`}>
                                {ctg}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="gallery-footer">
                <h3 className="title-footer">
                    Gallery
                </h3>
                <ul className="list-img flex-box">
                    {
                        listImg.map((img,index)=>(
                            <li key={index}>
                                <img src={img.urls.full} alt={img.alt_description}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default FooterTopRight
