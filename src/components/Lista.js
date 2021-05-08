import React, { Component } from "react";
import axios from "axios";

export class Lista extends Component {
  state = {
    heroes: [],
    allHeroes: [],
    filter: "",
  };

  componentDidMount() {
    axios.get(`https://api.opendota.com/api/heroes`).then((res) => {
      const allHeroes = res.data;
      this.setState({ heroes: allHeroes, allHeroes: allHeroes });
    });
  }

  componentDidUpdate() {
    const filtro = this.props.filtro;

    if (this.state.filter !== filtro && filtro.length > 1) {
      var filteredList = this.state.allHeroes.filter(function (hero) {
        return (
          hero.localized_name.toLowerCase().indexOf(filtro.toLowerCase()) > -1
        );
      });
      this.setState({ heroes: filteredList, filter: filtro });
    } else if (this.state.filter !== filtro) {
      this.setState({ heroes: this.state.allHeroes, filter: filtro });
    }
  }

  render(props) {
    return (
      <div className="m-4 p-4">
        <ul className="list-outside md:list-inside list-none">
          {this.state.heroes.map((hero, index) => (
            <li className={index % 2 === 0 ? "bg-gray-300" : "bg-gray-200"}>
              {hero.localized_name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
