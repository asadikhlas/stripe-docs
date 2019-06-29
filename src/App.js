import React from 'react';
import SideBar from './Components/SideBar/SideBar';
import ApiReference from './Components/ApiReference/API_Reference';
import Authentication from './Components/Authentication/Authentication';
import Errors from './Components/Errors/Errors';
import { Element } from "react-scroll";


const App = () => {
  return (
    <main className="flex container">
      <SideBar />
    <div className="book-page">
      <article className="markdown">
        <br />
        <br />

        <Element name="introduction">
        <ApiReference />
        </Element>
        <hr />
        <br />
        <br />
        <Element name="authentication">
        <Authentication />
        </Element>

        <hr />
        <br />
        <br />
        <Element name="errors">
          <Errors />
        </Element>
        <hr />
      </article>
    </div>
  </main>
  )
}



export default App;
