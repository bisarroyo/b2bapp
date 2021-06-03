import React from 'react';

import EmployeeStyle from './Styles';

const Employee = (props) => {
  const { status } = props;
  return (
    <EmployeeStyle>
      <div className='profile-image'>
        <img src='https://backlightblog.com/images/2020/10/blur-photo-background-header-1160x710.jpg' alt='' />
      </div>
      <div className='profile-text'>
        <p>
          <strong>Name: </strong>
          Bismark Arroyo
        </p>
        <p>
          <strong>Status: </strong>
          Active
        </p>
      </div>
    </EmployeeStyle>
  );
};

export default Employee;
