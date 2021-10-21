import React, {useState} from "react";
import { useHistory } from "react-router";
import logo from "../image/logo.svg";
import { ReactComponent as Menu } from "../icon/menu.svg";
import { ReactComponent as Search } from "../icon/search.svg";

function HeaderMobile({ hanlerClickShowOffCanvas }) {
    const [isShow, setisShow] = useState(false);
    const hanlerShowSearch = (e) => {
        e.preventDefault();
        setisShow(!isShow)
    }
    const [searchText, setsearchText] = useState("");
    const history = useHistory();
    const searchSubmit = (e) => {
        e.preventDefault();
        history.push(`/search/${searchText}`);
    }
    return (
        <div className="hidden-md header-mobile">
                <div className="header-mobile_inner">
                    <div className="site-logo">
                        <a href="viric">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>
                    <div className="offcanvas-search">
                        <button onClick={hanlerClickShowOffCanvas}>
                            <Menu />
                        </button>
                        <button onClick={hanlerShowSearch}>
                            <Search />
                        </button>
                    </div>
                </div>
                <form className={isShow ? "form-search active" : "form-search"} onSubmit={searchSubmit}>
                    <div className="container">
                        <input type="text" placeholder="search..." onChange={e => setsearchText(e.target.value)}/>  
                        <button type="submit">Search</button>
                    </div>
                </form>
        </div>
    );
}

export default HeaderMobile;
