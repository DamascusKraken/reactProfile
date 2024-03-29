import React from 'react';
import { Link } from 'react-router-dom';

 const Portals = ({ title, imageSrc, link }) => {
    return (
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 text-center  ">
        <Link className="text-light " to={link}>
          {title}
        </Link>
        <Link to={link}>
          <img src={imageSrc} className="w-100 shadow-1-strong rounded mb-4" alt={title}/>
        </Link>
      </div>
    );
  };

export default Portals; 