import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${props => (props.color ? props.color : '#0086ff')};
    width: 100%;
    height: 40px;
    align-items: center;

    h3 {
      margin-top: 0px !important;
      color: white;
      font-family: "Poppins";
      align-self: center;
      text-align: center;
      flex: 1;
    }

    a {
      position: absolute;
      margin-left: 10px;
      text-decoration: none;
      color: white;
    }
`;
export const Barra = styled.div`
display: flex;
flex-direction: row;
width:100%;
height:8px;
background: linear-gradient(to right,#fcd000 0,#ff8a00 17%,#ff253a 34%,#ff37a8 51%,#a400e1 67%,#0086ff 83%,#00d604 100%);

`;

export const Color = styled.div`
    background-color: ${props => props.color};
    height: 8px;
    float: left;
    display: flex;
    flex: 1;
`;

export const yellow = '#FFCE00';
export const orange ='#FB9600';
export const red = '#E25335';
export const rose = '#DE349E';
export const purple ='#BF2FDC';
export const deepPurple ='#5D33D5';
export const blue= '#2B7CD7';
export const cyan = '#33C3DD';
export const lightGreen ='#32D9A1';
export const green = '#3FCB2A';
 