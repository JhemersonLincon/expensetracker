import React from 'react'
import * as C from './styles';
type propsItem ={
  title:string;
  value:number;
  color?:string;
}
const ResumeItem = ({title,value, color}:propsItem) => {
  return (
    <C.Container>
      <C.title>{title}</C.title>
      <C.info color={color}>$ {value}</C.info>
    </C.Container>
  )
}

export default ResumeItem
