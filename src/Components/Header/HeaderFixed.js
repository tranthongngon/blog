import React,{useState} from "react";
import logo from "../image/logo.svg";
import { Link } from "react-router-dom";
import {ReactComponent as Close} from '../icon/close.svg'
import {ReactComponent as Face} from '../icon/face.svg'
import {ReactComponent as Instagram} from '../icon/instagram.svg'
import {ReactComponent as Pinterest} from '../icon/pinterest.svg'
import {ReactComponent as Twitter} from '../icon/twitter.svg'

function HeaderFixed({hanlerClickShowOffCanvas, isShowOffCanvas}) {
    const [isShow, setisShow] = useState(false)
    const hanlerShowMenu = (e) => {
        e.preventDefault();
        setisShow(!isShow)
    }
    const categorys= ['fashion', 'travel', 'lifestyle', 'beauty']
    return (
        <div className={isShowOffCanvas ? "header-left active": "header-left"}>
            <div className="header-left__inner">
                <div className="header-left__top">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <span className="close hidden-md" onClick={hanlerClickShowOffCanvas}> <Close/> </span>
                </div>
                <div className="header-left__middle">
                    <ul className="main-menu">
                        <li className="menu-item active">
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/featured">
                                Featured
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/single">
                                Single
                            </Link>
                        </li>
                        <li className="menu-item has-children-menu" onClick={hanlerShowMenu}>
                            <Link to="/category">
                                Category
                            </Link>
                            <ul className={isShow ? 'sub-menu active':'sub-menu'}>
                                {categorys.map((category, index) => <li key={index}>
                                    <Link to={`/category/${category}`}> {category} </Link>
                                </li>)}
                            </ul>
                        </li>
                        <li className="menu-item">
                            <Link to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="header-left__bottom">
                    <ul className="social flex-box flex-space-10">
                        <li>
                            <a href="facebook.com">
                                <Face/>
                            </a>
                        </li>
                        <li>
                            <a href="facebook.com">
                                <Pinterest/>
                            </a>
                        </li>
                        <li>
                            <a href="facebook.com">
                                <Twitter/>
                            </a>
                        </li>
                        <li>
                            <a href="facebook.com">
                                <Instagram/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HeaderFixed;
