import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  padding:${props => (props.padding ? props.padding : 0)};
`;

