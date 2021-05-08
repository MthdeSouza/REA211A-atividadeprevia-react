import "./App.css";
import React, { Component } from "react";
import { Lista } from "./components/Lista";
import { Pesquisa } from "./components/Pesquisa";

export class App extends Component {
  state = {
    filtroApp: [],
  };

  render() {
    const handleCallback = (childData) => {
      this.setState({ filtroApp: childData });
    };

    return (
      <div className="App">
        <header className="App-header">Heroes search</header>
        <Pesquisa parentCallback={handleCallback}></Pesquisa>
        <Lista filtro={this.state.filtroApp}></Lista>
        Atividade Prévia – Trabalho Prático | REA – Desenvolvimento Reativo
        <br></br>
        Aluno: Matheus Alexandre de Souza Cometti
      </div>
    );
  }
}
export default App;
