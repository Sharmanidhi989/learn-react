import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="jumbotron">
      <div className="display-4">Redux demo</div>
      <Link to='/about' className='btn btn-primary'>about</Link>
    </div>
  );
};

export default HomePage;
