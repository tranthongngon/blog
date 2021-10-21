import React from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as Face } from "../icon/face.svg";
import { ReactComponent as Twitter } from "../icon/twitter.svg";
import { ReactComponent as Instagram } from "../icon/instagram.svg";
import { ReactComponent as Pinterest } from "../icon/pinterest.svg";

function FooterSingle({ singlePost }) {
    const post = singlePost;
    return (
        post.map((p, i) => (
            <footer className="entry-footer flex-box" key={i}>
                <div className="entry-footer-left">
                    <ul className="tags-list">
                        {p.tags.map((tag, index) => (
                            <li key={index} className="tag-item">
                                <Link to={`/category/${tag}`}>
                                    #{tag}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="entry-footer-right">
                    <ul className="social flex-box flex-space-10">
                        <li>
                            <a href="facebook.com">
                                <Face />
                            </a>
                        </li>
                        <li>
                            <a href="facebook.com">
                                <Pinterest />
                            </a>
                        </li>
                        <li>
                            <a href="facebook.com">
                                <Twitter />
                            </a>
                        </li>
                        <li>
                            <a href="facebook.com">
                                <Instagram />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        ))
    )
}

export default FooterSingle
