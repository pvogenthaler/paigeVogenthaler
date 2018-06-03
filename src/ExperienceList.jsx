import React from 'react';
import ExperienceItem from './ExperienceItem';

class ExperienceList extends React.Component {
  constructor() {
    super();
    this.state = {
      experienceData: [
        {
          company: 'Vivid Seats',
          jobTitle: 'Software Engineer',
          jobDescription: 'I developed things'
        },
        {
          company: 'Oracle',
          jobTitle: 'Business Development Consultant',
          jobDescription: 'I sold things'
        }
      ]
    }
  }

  render() {
    return (
      <ul className="experience-list">
        {
          this.state.experienceData.map((itemData, i) => (
            <ExperienceItem { ...{ itemData, key: i } } />
          ))
        }
      </ul>
    );
  };
}

export default ExperienceList;
