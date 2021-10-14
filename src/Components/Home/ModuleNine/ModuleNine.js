import React from 'react';
import './module-nine.css';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { ReactComponent as Square } from '../Icon/square.svg';
import { ReactComponent as Next } from '../Icon/next.svg';
import HTMLReactParser from 'html-react-parser';
import SwiperCore, {
    Navigation,
    Pagination,
    Virtual
  } from 'swiper'; 
SwiperCore.use([Navigation, Pagination, Virtual]);

function ModuleNine({dataPosts,dataChildren}) {
    const data = dataPosts;
    const dataSlide = dataChildren;
    return (
        <div className="module module-9">
            <div className="module-heading flex-box heading-style-1">
                <h2 className="heading heading-title">
                Hot news
                </h2>
            </div>
            <div className="module__inner">
                <div className="swiper-silder">
                    <Swiper
                        spaceBetween={40}
                        slidesPerView={'auto'}
                        loop={true}
                        navigation={true}
                        speed={600}
                        pagination={{"clickable": true}}
                        autoplay={true}
                        breakpoints={{
                            "0": {
                                "slidesPerView": 1
                            },
                            "576": {
                                "slidesPerView": "auto",
                            }
                        }}
                        className="parent-slide"
                        >
                            <SwiperSlide>
                                {data.filter(post=>post.id === "44").map((post,index)=>(
                                    <article className="post post--horizontal post--horizontal-slide" key={index}>
                                        <div className="post__thumb object-fit">
                                            <Link to={`/single/${post.id}`}>
                                                <img src={post.imgUrl} alt="img" />
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
                                            <h3 className="post__title line-clamp line-clamp-3 f-28 f-w-900">
                                                <Link to={`/single/${post.id}`}>
                                                    {post.title}
                                                </Link>
                                            </h3>
                                            <div className="post__excerpt line-clamp line-clamp-2 f-16 f-w-400">
                                                {HTMLReactParser(post.content)}
                                            </div>
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
                                ))}
                            </SwiperSlide>
                            {dataSlide.map((post, index)=>(
                                <SwiperSlide key={index}>
                                    <article className="post post--horizontal post--horizontal-slide">
                                        <div className="post__thumb object-fit">
                                            <Link to={`/single/${post.id}`}>
                                                <img src={post.imgUrl} alt="img" />
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
                                            <h3 className="post__title line-clamp line-clamp-3 f-28 f-w-900">
                                                <Link to={`/single/${post.id}`}>
                                                    {post.title}
                                                </Link>
                                            </h3>
                                            <div className="post__excerpt line-clamp line-clamp-2 f-16 f-w-400">
                                                {HTMLReactParser(post.content)}
                                            </div>
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
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default ModuleNine
