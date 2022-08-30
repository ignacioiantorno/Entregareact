import React from "react";
import "./styles.js";
import CartWidget from "./components/CartWidget.js";


import { styles } from "./styles";

// INTERPOLAR VARIABLES DE JS
// JSS

// COMPONENTS
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer.js";



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ItemListContainer title="Bienvenido a mi store"/>
       
      </div>
    );
  }
}

export default App;