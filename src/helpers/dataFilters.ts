import {Item} from '../types/Item'

export const getCurrentMonth = ()=>{
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth()+1}`
}


export const filtetListbyMonth =(list:Item[], date:string): Item[]=>{

  let [year, month] = date.split('-');
  let newList:Item[] = [];
  for(let i in list){
    if(
      list[i].date.getFullYear() === +year &&
      list[i].date.getMonth() === +month
    ){
      newList.push(list[i]);
    }
  }

  return newList
}

export const formatDate = (date:Date):string=>{
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  return `${addZeroDate(day)}/${addZeroDate(month)}/${year}`;
}
const addZeroDate = (n:number):string => n < 10?`0${n}`:`${n}`

export const formatCurrentMonth = (currentMonth:string):string =>{
  const [year, month] = currentMonth.split('-')
  const months = ['Janeiro','Fevereiro','Marçõ','Abril','Maio', 'Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  return `${months[(+month) - 1]} de ${year}`
}