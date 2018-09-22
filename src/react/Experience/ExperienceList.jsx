import React from 'react';
import ExperienceItem from './ExperienceItem';

const ExperienceList = () => {
  const data = [
    {
      organization: 'University of California, Berkeley',
      title: 'Bachelors, Philosophy',
      description: 'I studied things'
    },
    {
      organization: 'Oracle',
      title: 'Business Development Consultant',
      description: 'I sold things'
    },
    {
      organization: 'Vivid Seats',
      title: 'Software Engineer',
      description: 'I developed things'
    }
  ];

  return (
    <ul className="experience-list">
      {
        data.map((itemData, i) => (
          <ExperienceItem { ...{ ...itemData, key: i } } />
        ))
      }
    </ul>
  );
}

export default ExperienceList;
