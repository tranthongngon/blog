import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Square } from '../Icon/square.svg';
import { ReactComponent as Next } from '../Icon/next.svg';
import './module-six.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, {
    Navigation,
    Pagination,
    Virtual
  } from 'swiper'; 
  SwiperCore.use([Navigation, Pagination, Virtual]);

function ModuleSix({dataPosts}) {
    const data = dataPosts;
    return (
        <div className="module module-6">
            <div className="module__inner">
                <div className="heading__inside heading__inside-style-1">
                    <h3 className="heading__inside-title"> 
                    Popular
                    </h3>
                </div>
                <div className="swiper-silder">
                    <Swiper
                    spaceBetween={30}
                    navigation={true}
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                    slidesPerView={'auto'}
                    loop={true}
                    pagination={{"clickable": true}}
                    grabCursor={true}
                    speed={500}
                    autoplay={true}
                    className="parent-slide"
                    >
                        <SwiperSlide>
                            {data.filter(post => post.id ==="14").map((post, index)=>(
                                <article className="post post--overlay post--overlay-slide" key={index}>
                                <div className="post__thumb object-fit">
                                    <Link to={`/single/${post.id}`}>
                                        <img src={post.imgUrl} alt="img" />
                                    </Link>
                                </div>
                                <div className="post__text">
                                    <div className="post__text-wrap">
                                        <div className="post__text-inner">
                                            <div className="post__meta-top">
                                                <div className="author author-style-2">
                                                    <Square/>
                                                    <Link to={`/single/${post.id}`} className="author-name f-14 f-w-400">
                                                    {post.author.authorName}
                                                    </Link>
                                                </div>
                                            </div>
                                            <h3 className="post__title f-20 f-w-900 line-clamp line-clamp-2">
                                            <Link to={`/single/${post.id}`}>
                                            {post.title}
                                            </Link>
                                            </h3>
                                            <div className="post__meta-bottom post__meta">
                                                <time className="time published" dateTime="2019-03-06T08:45:23+00:00" title="March 6, 2019 at 8:45 am"> {post.time} </time>
                                                <div className="post__readmore post__readmore-style-1">
                                                    <Link to={`/single/${post.id}`}>
                                                        <Next/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link to={`/category/${post.category}`} className="post__cat post__cat-bg post__cat-position">
                                    {post.category}
                                </Link>
                            </article>
                            ))}
                        </SwiperSlide>
                        <SwiperSlide>
                            {data.filter(post => post.id ==="15").map((post, index)=>(
                                <article className="post post--overlay post--overlay-slide" key={index}>
                                <div className="post__thumb object-fit">
                                    <Link to={`/single/${post.id}`}>
                                        <img src={post.imgUrl} alt="img" />
                                    </Link>
                                </div>
                                <div className="post__text">
                                    <div className="post__text-wrap">
                                        <div className="post__text-inner">
                                            <div className="post__meta-top">
                                                <div className="author author-style-2">
                                                    <Square/>
                                                    <Link to={`/single/${post.id}`} className="author-name f-14 f-w-400">
                                                    {post.author.authorName}
                                                    </Link>
                                                </div>
                                            </div>
                                            <h3 className="post__title f-20 f-w-900 line-clamp line-clamp-2">
                                            <Link to={`/single/${post.id}`}>
                                            {post.title}
                                            </Link>
                                            </h3>
                                            <div className="post__meta-bottom post__meta">
                                                <time className="time published" dateTime="2019-03-06T08:45:23+00:00" title="March 6, 2019 at 8:45 am"> {post.time} </time>
                                                <div className="post__readmore post__readmore-style-1">
                                                    <Link to={`/single/${post.id}`}>
                                                        <Next/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link to={`/category/${post.category}`} className="post__cat post__cat-bg post__cat-position">
                                    {post.category}
                                </Link>
                            </article>
                            ))}
                        </SwiperSlide>
                        <SwiperSlide>
                            {data.filter(post => post.id ==="16").map((post, index)=>(
                                <article className="post post--overlay post--overlay-slide" key={index}>
                                <div className="post__thumb object-fit">
                                    <Link to={`/single/${post.id}`}>
                                        <img src={post.imgUrl} alt="img" />
                                    </Link>
                                </div>
                                <div className="post__text">
                                    <div className="post__text-wrap">
                                        <div className="post__text-inner">
                                            <div className="post__meta-top">
                                                <div className="author author-style-2">
                                                    <Square/>
                                                    <Link to={`/single/${post.id}`} className="author-name f-14 f-w-400">
                                                    {post.author.authorName}
                                                    </Link>
                                                </div>
                                            </div>
                                            <h3 className="post__title f-20 f-w-900 line-clamp line-clamp-2">
                                            <Link to={`/single/${post.id}`}>
                                            {post.title}
                                            </Link>
                                            </h3>
                                            <div className="post__meta-bottom post__meta">
                                                <time className="time published" dateTime="2019-03-06T08:45:23+00:00" title="March 6, 2019 at 8:45 am"> {post.time} </time>
                                                <div className="post__readmore post__readmore-style-1">
                                                    <Link to={`/single/${post.id}`}>
                                                        <Next/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link to={`/category/${post.category}`} className="post__cat post__cat-bg post__cat-position">
                                    {post.category}
                                </Link>
                            </article>
                            ))}
                        </SwiperSlide><SwiperSlide>
                            {data.filter(post => post.id ==="17").map((post, index)=>(
                                <article className="post post--overlay post--overlay-slide" key={index}>
                                <div className="post__thumb object-fit">
                                    <Link to={`/single/${post.id}`}>
                                        <img src={post.imgUrl} alt="img" />
                                    </Link>
                                </div>
                                <div className="post__text">
                                    <div className="post__text-wrap">
                                        <div className="post__text-inner">
                                            <div className="post__meta-top">
                                                <div className="author author-style-2">
                                                    <Square/>
                                                    <Link to={`/single/${post.id}`} className="author-name f-14 f-w-400">
                                                    {post.author.authorName}
                                                    </Link>
                                                </div>
                                            </div>
                                            <h3 className="post__title f-20 f-w-900 line-clamp line-clamp-2">
                                            <Link to={`/single/${post.id}`}>
                                            {post.title}
                                            </Link>
                                            </h3>
                                            <div className="post__meta-bottom post__meta">
                                                <time className="time published" dateTime="2019-03-06T08:45:23+00:00" title="March 6, 2019 at 8:45 am"> {post.time} </time>
                                                <div className="post__readmore post__readmore-style-1">
                                                    <Link to={`/single/${post.id}`}>
                                                        <Next/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link to={`/category/${post.category}`} className="post__cat post__cat-bg post__cat-position">
                                    {post.category}
                                </Link>
                            </article>
                            ))}
                        </SwiperSlide>
                </Swiper>
                </div>
            </div>
        </div>
    )
}

export default ModuleSix
