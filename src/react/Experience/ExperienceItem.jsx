import React from 'react';
import PropTypes from 'prop-types';

const ExperienceItem = ({ organization, title, location, description }) => (
  <li className="experience-item">
    <div>{ organization }</div>
    <div>{ title }</div>
    <div>{ location }</div>
    <div>{ description }</div>
  </li>
);

ExperienceItem.propTypes = {
  organization: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string,
  description: PropTypes.string
}

export default ExperienceItem;
