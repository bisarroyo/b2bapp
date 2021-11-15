import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { users } from '../../actions/actions';
import EmployeeStyle from './Styles';

const Employee = (props) => {
  useEffect(() => {
    props.users;
    console.log(props.all);
  }, []);

  return (
    <EmployeeStyle>
      <div className='profile-image'>
        <img src='https://backlightblog.com/images/2020/10/blur-photo-background-header-1160x710.jpg' alt='' />
      </div>
      <div className='profile-text'>
      </div>
    </EmployeeStyle>
  );
};

const mapStateToProps = (state) => {
  const test = state;
  return { all: test };
};

export default connect(mapStateToProps, { users })(Employee);
