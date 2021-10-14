import React from 'react';
import {Link} from 'react-router-dom';
import './module-seven.css';
import HTMLReactParser from 'html-react-parser';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, {
    Navigation,
    Pagination,
    Virtual
  } from 'swiper'; 
  SwiperCore.use([Navigation, Pagination, Virtual]);

function ModuleSeven({dataPosts}) {
    const data = dataPosts;
    return (
        <div className="module module-7">
            <div className="module-heading flex-box heading-style-1">
                <h2 className="heading heading-title">
                Top Trending
                </h2>
            </div>
            <div className="module__inner">
                <div className="swiper-silder">
                    <Swiper
                    spaceBetween={20}
                    navigation={true}
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                    slidesPerView={2}
                    loop={true}
                    pagination={{"clickable": true}}
                    grabCursor={true}
                    speed={600}
                    breakpoints={{
                        "0": {
                            "slidesPerView": 1,
                            "centeredSlides":false
                        },
                        "576": {
                            "slidesPerView": 2
                        },
                        "992": {
                            "slidesPerView": 2
                        },
                        "1200": {
                            "spaceBetween": 40,
                            "slidesPerView":3,
                            "centeredSlides":true
                        }
                    }}
                    className="parent-slide"
                    >
                        {data.slice(12,17).map((post,index)=>(
                            <SwiperSlide key={index}>
                                <article className="post post--overlay post--overlay-large">
                                        <div className="post__thumb object-fit">
                                            <Link to={`/single/${post.id}`}>
                                                <img src={post.imgUrl} alt="img" />
                                            </Link>
                                        </div>
                                        <div className="post__text text-center">
                                            <div className="post__text-wrap">
                                                <div className="post__text-inner">
                                                <h3 className="post__title f-24 f-w-900 line-clamp line-clamp-2">
                                                <Link to={`/single/${post.id}`}>
                                                {post.title}
                                                </Link>
                                            </h3>
                                            <div className="post__excerpt line-clamp line-clamp-2 f-16 f-w-400">
                                                {HTMLReactParser(post.content)}
                                            </div>
                                            <div className="post__meta">
                                                <div className="author author-style-1">
                                                    <Link to={`/single/${post.id}`} className="author-avatar">
                                                        <img src={post.author.authorImg} alt="author"/>
                                                    </Link>
                                                </div>
                                                <time className="time published" dateTime="2019-03-06T08:45:23+00:00" title="March 6, 2019 at 8:45 am"> {post.time} </time>
                                            </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Link to={`/category/${post.category}`} className="post__cat post__cat-bg post__cat-position">
                                            {post.category}
                                        </Link>
                                    </article>
                            </SwiperSlide>
                        ))}
                </Swiper>
                </div>
            </div>
        </div>
    )
}

export default ModuleSeven;
