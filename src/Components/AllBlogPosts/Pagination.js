import React from 'react';
import "./Pagination.css"

function Pagination({postPerPage, totalPosts, paginate,currentPage}) {
    const pageNumber = [];
    for(let i = 1; i <= Math.ceil(totalPosts/postPerPage);i++){
        pageNumber.push(i)
    }
    return (
        <div className="pagination">
            <ul className="pagination-list">
                {
                    pageNumber.map(number =>(
                        <li key={number} className={currentPage === number ? "number-item active" :"number-item"}>
                            <a href="!#" onClick={(e)=> {
                                e.preventDefault();
                                paginate(number)
                            }}>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagination;