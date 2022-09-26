import React, {useState,useEffect} from "react";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Globalstyle from "./styles/global";
import Form from "./components/Form";

const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    //pegando a saida
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));
    //pegando a entrada
    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));
  
}, [transactionsList]);


  return (
    <>
       <Header/> 
       <Resume/>
       <Form/>     
       <Globalstyle/>
    </>
  );
};

export default App;