{/* eslint-disable */ }
import React from 'react';
import SideBar from './Components/SideBar/SideBar';
import ApiReference from './Components/ApiReference/API_Reference';
import Authentication from './Components/Authentication/Authentication';
import Errors from './Components/Errors/Errors';
import { Element, Link } from "react-scroll";
import Balance from './Components/Balance/Balance';
import BalanceObject from './Components/Balance/BalanceObject';
import BalanceTransactionObject from './Components/Balance/BalanceTransactionObject';
import RetrieveBalance from './Components/Balance/RetrieveBalance';
import ListAllBalanceHistory from './Components/Balance/ListAllBalanceHistory';

const App = () => {
  return (
    <main className="flex container">
      <SideBar />
      <div className="book-page">
        <article className="markdown">


          <Element name="introduction" >
            <ApiReference />
          </Element>



          <Element name="authentication" >
            <Authentication />
          </Element>



          <Element name="errors" >
            <Errors />
          </Element>


          <Element name="balance">
            <Balance />
          </Element>



          <Element name="object">
            <BalanceObject />
          </Element>



          <Element name="transaction">
            <BalanceTransactionObject />
          </Element>



          <Element name="retrieve" >
            <RetrieveBalance />
          </Element>



          <Element name="listall" >
            <ListAllBalanceHistory />
          </Element>
        </article>
      </div>
    </main>
  )
}



export default App;
