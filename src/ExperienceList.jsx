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
      <ul class="experience-list">
        {
          this.state.experienceData.map((itemData) => (
            <ExperienceItem { ...{ itemData } } />
          ))
        }
      </ul>
    );
  };
}

export default ExperienceList;
