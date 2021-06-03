import styled from 'styled-components';

const ContainerEmployee = styled.div`
  background-color: #00000022;
  box-shadow: 5px 10px 10px 0px #00000011;
  border-radius: 20px;
  margin: 30px;
  padding: 10px;
  
  h2 {
    text-align: center;
  }
  
  .employee-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export default ContainerEmployee;
