import styled from 'styled-components';

export const Container = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul {
    width: 100%;
    max-width: 900px;
  }

  @media only screen and (max-width: 900px){
    ul {
      width: 95%;
    }
  }
`;