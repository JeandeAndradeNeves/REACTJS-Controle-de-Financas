import React from "react";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Globalstyle from "./styles/global";
import Form from "./components/Form";

const App = () => {
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