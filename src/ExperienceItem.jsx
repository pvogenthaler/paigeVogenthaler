import React from 'react';
import PropTypes from 'prop-types';

const ExperienceItem = ({ itemData }) => (
  <li className="experience-item">
    {`${itemData.company} - ${itemData.jobTitle}`}
  </li>
);

ExperienceItem.propTypes = {
  itemData: PropTypes.object.isRequired
}

export default ExperienceItem;
