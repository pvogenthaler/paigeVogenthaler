import React from 'react';

const ExperienceItem = ({ itemData }) => (
  <li class="experience-item">
    {`${itemData.company} - ${itemData.jobTitle}`}
  </li>
);

export default ExperienceItem;
