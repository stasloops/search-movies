import React from 'react'
import './Pagination.css'

const Pagination = ({ itemPerPage, totalItems, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <div>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li className="page__item" key={number}>
                            <a href="#" className="page__link" onClick={paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
            
        </div>
    )
}

export default Pagination
