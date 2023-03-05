import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a 
        style={{color: 'rgb(48, 46, 46)', textDecoration: 'none'}}
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
        ME
        </a>
      </li>
      <li className="nav-item">
        <a
      style={{color: 'rgb(48, 46, 46)', textDecoration: 'none'}}
          href="#EmailMe"
          onClick={() => handlePageChange('EmailMe')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'EmailMe' ? 'nav-link active' : 'nav-link'}
        >
          CONTACT
        </a>
      </li>
      <li className="nav-item">
        <a
        style={{color: 'rgb(48, 46, 46)', textDecoration: 'none'}}
      
          href="#CV"
          onClick={() => handlePageChange('CV')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'CV' ? 'nav-link active' : 'nav-link'}
        >
          CV
        </a>
      </li>
      <li className="nav-item">
        <a
         style={{color: 'rgb(48, 46, 46)', textDecoration: 'none'}}
          href="#Projects"
          onClick={() => handlePageChange('Projects')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          PROJECTS
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
