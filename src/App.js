import React, { useState, useEffect } from "react";
import "./styles.js";
import CartWidget from "./components/CartWidget.js";


import { styles } from "./styles";

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer.js";
import ItemCount from "./components/ItemCount.js";



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ItemListContainer title="Bienvenido a mi store"/>
        <ItemCount />
       
      </div>
    );
  }
}

export default App;