import React,{useState} from 'react';
import { useHistory } from 'react-router';
import {ReactComponent as Star} from '../icon/star.svg'
import {ReactComponent as Fire} from '../icon/fire.svg'
import {ReactComponent as Clock} from '../icon/clock.svg'
import {ReactComponent as Search} from '../icon/search.svg'
import user_avatar from '../image/user.svg'

function HeaderTop() {
    const [searchText, setsearchText] = useState("");
    const history = useHistory();
    const searchSubmit = (e) => {
        e.preventDefault();
        history.push(`/search/${searchText}`);
    }
    return (
        <div className="top-bar hidden-sm">
            <div className="top-bar__inner flex-box align-item-center">
                <div className="top-bar__section top-bar-left">
                    <ul className="list-top">
                        <li>
                            <a href="vric.com"> <Star/> Top Trending </a>
                        </li>
                        <li>
                            <a href="vric.com"> <Fire/> Hot News </a>
                        </li>
                        <li>
                            <a href="vric.com"> <Clock/> Lasted News </a>
                        </li>
                    </ul>
                </div>
                <div className="top-bar__section top-bar-right">
                    <div className="user">
                        <p className="user-name">Loren Benz</p>
                        <a href="viric" className="user-avatar">
                            <img src={user_avatar} alt="avatar"/>
                        </a>
                    </div>
                    <div className="search">
                        <form onSubmit={searchSubmit} className="search-form">
                            <input type="text" placeholder="search..." onChange={e => setsearchText(e.target.value)}/>
                            <button type="submit" className="search-submit"><Search/></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop
