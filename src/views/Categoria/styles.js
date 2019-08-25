import styled from 'styled-components';

export const Setor = styled.a`
    display: flex;
    flex: 1; 
    background: ${props => props.color} url(${props => props.img}) no-repeat left center;
    background-size: 50% auto;
    min-height: 100px;
    align-items: center;
    justify-content: flex-end;
    img {
        height: 90%;
        width: auto;
        max-height: 100px;
    }

    h2 {
        color: #fff;
        text-align: right;
        padding: 5px 10px;
        background-color: ${props => props.color};
    }
`;