import styled from 'styled-components';

export const Container  = styled.div`
  flex:1;
`;
export const title  = styled.div`
  text-align: center;
  font-weight: bold;
  color: #888;
  margin-bottom: 5px;
`;
export const info = styled.div<{color?:string}>`
  text-align: center;
  font-weight: bold;
  color: ${(props)=>props.color?props.color:'#000'};
`;