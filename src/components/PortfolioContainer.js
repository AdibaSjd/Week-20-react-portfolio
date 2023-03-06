import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import CV from './pages/CV';
import Projects from './pages/Projects';
import EmailMe from './pages/EmailMe';
import Footer from './Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'EmailMe') {
      return <EmailMe />;
    }
    if (currentPage === 'CV') {
      return <CV />;
    }
    return <Projects/>;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
   
    <div className='Page'>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

    </div>


  );
}
