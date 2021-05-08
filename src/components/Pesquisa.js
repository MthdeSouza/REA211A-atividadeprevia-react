import React, { Component } from "react";

export class Pesquisa extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleFiltroChange = (event) => {
    this.setState({ value: event.target.value });
    this.props.parentCallback(event.target.value);
    event.preventDefault();
  };

  render(props) {
    return (
      <div className="w-auto mx-8 px-4 mt-4 pt-2">
        <input
          className="h-10 w-full border bg-transparent mr-3 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Faça sua busca(informe ao menos 2 caracteres)"
          onChange={this.handleFiltroChange}
          value={this.state.value}
        ></input>
      </div>
    );
  }
}
