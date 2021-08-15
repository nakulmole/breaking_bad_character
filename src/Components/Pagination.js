import React from 'react';
import '../CSS/Pagination.css';
const Pagination = ({ charactersPerPage, totalCharacters, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
 
    <div className="block_container">
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href="#" className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
      <div></div>
    </nav>
</div>


  );
};

export default Pagination;
