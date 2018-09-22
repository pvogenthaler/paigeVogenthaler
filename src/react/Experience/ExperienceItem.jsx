import React from 'react';
import PropTypes from 'prop-types';

const ExperienceItem = ({ organization, title, description }) => (
  <li className="experience-item">
    <div>{ organization }</div>
    <div>{ title }</div>
    <div>{ description }</div>
  </li>
);

ExperienceItem.propTypes = {
  organization: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default ExperienceItem;
