import React from 'react';
import * as C from './styles';
import {formatCurrentMonth} from '../../helpers/dataFilters'
import ResumeItem from '../ResumeItem/ResumeItem'
type Props = {
  currentMonth:string;
  onMonthChange:(newMonth:string)=>void;
  income:number;
  expense:number;

}
const InfoArea = ({ currentMonth,onMonthChange,income, expense }:Props) => {

  const handlePrevMonth = () => {
    const [year, month] = currentMonth.split('-');
    const currentDate = new Date(parseInt(year), parseInt(month)-1,1)
    currentDate.setMonth(currentDate.getMonth() - 1)
    onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`)
  }
  const handleNextMonth = () => {
    const [year, month] = currentMonth.split('-');
    const currentDate = new Date(parseInt(year), parseInt(month)-1,1)
    currentDate.setMonth(currentDate.getMonth() + 1)
    onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`)
  }
  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePrevMonth}> &gt;= </C.MonthArrow>
        <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}> =&gt; </C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea>
        <ResumeItem title='Receitas' value={income}/>
        <ResumeItem title='Despesas'  value={expense}/>
        <ResumeItem 
        title='Balanço' 
        value={income - expense}
        color={((income  - expense) < 0?'red':'green')}
        />
      </C.ResumeArea>
    </C.Container>
  )
}

export default InfoArea
