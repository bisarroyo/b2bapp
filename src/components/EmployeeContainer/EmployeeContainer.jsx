import React from 'react';

import Employee from '../Employee/Employee';
import ContainerEmployee from './Styles';

const EmployeeContainer = () => {
  return (
    <ContainerEmployee>
      <h2>Employeer List</h2>
      <div className='employee-list'>
        <Employee />
        <Employee />
        <Employee />
        <Employee />
        <Employee />
        <Employee />
        <Employee />
        <Employee />
        <Employee />
      </div>
    </ContainerEmployee>
  );
};

export default EmployeeContainer;
