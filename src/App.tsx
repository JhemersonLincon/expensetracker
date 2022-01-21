import React from 'react';
import * as C from './App.styles';
import { Categories } from './types/Category';
import { Item } from './types/Item';

import { categories } from './data/categories';
import { item } from './data/items';

import { getCurrentMonth, filtetListbyMonth } from './helpers/dataFilters';
import TableArea from './components/tableArea/TableArea';
import { GlobalStyle } from './GlobalStyles';
import InfoArea from './components/infoArea/infoArea';
import { Category } from './components/tableItem/styles';
import InsercaoArea from './components/InsercaoArea/InsercaoArea';


const App = ()=> {
  const [list, setList] = React.useState(item);
  const [filteredList, setFilteredList] = React.useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = React.useState(getCurrentMonth());
  const [income,setIncome] = React.useState(0);
  const [expense,setExpense] = React.useState(0);

  React.useEffect(()=>{
    setFilteredList(filtetListbyMonth(list, currentMonth));
    
  },[list,currentMonth]);
  React.useEffect(()=>{
    let expenseCount = 0;
    let incomeCount = 0;
    for( let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value
      } else{
        incomeCount += filteredList[i].value
      }
      setExpense(expenseCount)
      setIncome(incomeCount);
    }
  },[filteredList])
  const handleMonthChange = (newMonth: string)=>{
    setCurrentMonth(newMonth)
  }
  return (
    <div className="App">
      <GlobalStyle/>
     <C.Container>
       <C.Header>
         <C.HeaderText>
           Sistema Financeiro
         </C.HeaderText>
       </C.Header>
       <C.Body>

         <InfoArea 
          onMonthChange={handleMonthChange}
          currentMonth={currentMonth}
          income={income}
          expense={expense}
          />

         <InsercaoArea/>

         <TableArea list={filteredList}/>

       </C.Body>
       </C.Container> 
    </div>
  );
}

export default App;
