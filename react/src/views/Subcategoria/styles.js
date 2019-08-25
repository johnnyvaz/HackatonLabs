import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Produto = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    border: 1px solid lightgray;
    margin: 5px;
    background-color: #fff;

    img {
        width: 80%;
        height: auto;
        margin: 10px;
    }

    h5 {
        color: black;
    }
`;

export const Linha = styled.div`
    display: flex;
    flex-direction: row;
`;
