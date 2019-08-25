import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
  height: 100%;
`;
export const Header = styled.div`

    background-color: ${props => (props.color ? props.color : '#0086ff')};
    text-align: center;
    width: 100%;
    height: 40px;

    h3 {
      margin-top: 0px !important;
      color: white;
      font-family: "Poppins";
    }
`;
export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
`;