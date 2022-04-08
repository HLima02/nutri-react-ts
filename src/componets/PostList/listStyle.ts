import styled from 'styled-components';
type LiProps = {
  bg: string;
}

export const LiContainer = styled.li`
  background-image: url(${(props) => props.color});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 30px 0;

  .mask-list {
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    padding: 30px 3%;
    color: #fff;
    position: relative;
    min-height: 400px;

    h2{
      margin-bottom: 30px;
      font-size: 26px;
    }

    label {
      background-color: #1664C0;
      padding: 5px;
      position: absolute;
      right: 0;
      top:0;
    }

    p {
      font-size: 18px;
      line-height: 30px;
      letter-spacing: 1.5px;
      margin: 50px 0;
      width: 60%;
    }
  }

  @media only screen and (max-width: 900px){
    .mask-list {
      p {
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 500px){
    .mask-list {
      h2{
        font-size: 20px;
      }
      p {
        font-size: 15px;
      }
    }
  }
`;

