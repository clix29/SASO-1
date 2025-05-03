import React from 'react';
import { FaSchool, FaBook, FaAccessibleIcon, FaArrowRight } from 'react-icons/fa';
import './AcademicSupportBanner.css';

const AcademicSupportBanner = () => {
  return (
    <div className="banner-container">
      <div className="banner-header">
        <FaSchool className="banner-icon" />
        <h2 className="banner-title">
          WELCOME TO THE<br />
          STUDENT ACADEMIC SUPPORT OFFICE
        </h2>
      </div>

      <button className="banner-button" onClick={() => alert('Discover more clicked')}>
        DISCOVER MORE <FaArrowRight className="button-icon" />
      </button>

      <div className="modules-container">
        <h3 className="modules-title">SUPPORTED MODULES</h3>
        <div className="module-list">
          <div className="module-item">
            <FaBook className="module-icon" />
            <span>STUDYTHON</span>
          </div>
          <div className="module-item">
            <FaAccessibleIcon className="module-icon" />
            <span>SDS INTERVENTION</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicSupportBanner;
