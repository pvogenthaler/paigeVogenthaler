import React from 'react';
import ExperienceItem from './ExperienceItem';

const ExperienceList = () => {
  const data = [
    {
      organization: 'Vivid Seats',
      title: 'Software Engineer',
      location: 'Chicago, IL',
      description: 'Software engineer specialized in JavaScript, ES6, and React. I develop clean, maintainable, reusable, testable, and scalable production code for impactful technologies'
    },
    {
      organization: 'Oracle',
      title: 'Business Development Consultant',
      location: 'Redwood Shores, CA',
      description: 'Managed full sales cycles (forecasts, demos, pipeline, revenue generation) in key enterprise accounts for Oracle’s Customer Experience Cloud Solutions (Sales Automation/ CRM, Marketing Automation, Social Listening)'
    },
    {
      organization: 'Zipcar',
      title: 'Brand Ambassador',
      location: 'San Francisco, CA',
      description: 'Managed Zipcar membership campaigns at biweekly public, business, and university marketing events alongside team of 10+ brand representatives'
    },
    {
      organization: 'University of California, Berkeley',
      title: 'Bachelors, Philosophy',
      location: 'Berkeley, CA'
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
