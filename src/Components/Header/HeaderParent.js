import React, {useState} from 'react'
import './header.css'
import HeaderFixed from './HeaderFixed'
import HeaderMobile from './HeaderMobile';
import HeaderTop from './HeaderTop'

function HeaderParent() {
    const [isShowOffCanvas, setisOffCanvas] = useState(false);
    const hanlerClickShowOffCanvas = (e) => {
        e.preventDefault();
        setisOffCanvas(!isShowOffCanvas)
    }
    return (
        <div className="site-header">
            <HeaderTop/>
            <HeaderFixed hanlerClickShowOffCanvas={hanlerClickShowOffCanvas} isShowOffCanvas ={isShowOffCanvas}/>
            <p className={isShowOffCanvas ? "mark-up active" : "mark-up"} onClick = {hanlerClickShowOffCanvas}></p>
            <HeaderMobile hanlerClickShowOffCanvas={hanlerClickShowOffCanvas}/>
        </div>
    )
}

export default HeaderParent
