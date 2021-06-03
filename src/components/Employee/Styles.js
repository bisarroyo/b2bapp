import styled from 'styled-components';

const EmplooyeeStyle = styled.div`
  border: solid 1px #00000033;
  margin: 10px;
  height: 200px;
  width: 200px;
  border-radius: 10px;
  box-shadow: 5px 10px 10px 0px #00000011;
  background-color: #aac33366;

  .profile-image {
    display: flex;
    justify-content: center;
    img {
    margin: 8px;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    overflow: hidden;
    }
  }

  .profile-text {
    margin-left: 8px;
  }
`;

export default EmplooyeeStyle;
