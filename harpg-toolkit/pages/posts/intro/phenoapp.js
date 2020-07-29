// 2595 X 2139 PIXELS
import React from "react";

import Side from "../../../components/layouts/side";
import Display from "../../../components/phenoapp/display";
import styles from '../../../styles/phenoapp.module.css';

export default class Phenoapp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedbase: "BLANK",
      menuID: "start",
      menu: { 
        id: '',
        title: '',
        button: '',
        menuitem: [],
        next: ''
      },
      isLoading: false,
      error: null,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleClick() {
    fetch(`http://localhost:3000/api/phenoapp/menu?id=${this.state.menu.next}`)
    .then(response => response.json())
    .then(data => this.setState({ 
      menuID: this.state.menu.next,
      menu: data, 
      isLoading: false 
    }))
    .catch(error => this.setState({ error, isLoading: false }));
  }

  handleChange(e) {
    console.log('Change handled.')
    if (this.state.selectedbase != e.target.value) { 
      return this.setState({selectedbase: e.target.value})
      
    } else {
      return this.setState({selectedbase: 'BLANK'})
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(`http://localhost:3000/api/phenoapp/menu?id=${this.state.menuID}`)
    .then(response => response.json())
    .then(data => this.setState({ menu: data, isLoading: false }))
    .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    if (this.state.isLoading) {
      return <Side><p>Loading...</p></Side>;
    }

    return (
      <Side>
        <h1>{this.state.menu.title}</h1>
        <Display id={this.state.selectedbase}/>
        <ul> { this.state.menu.menuitem.map((item) => (
            <li>
                <input 
                    type='checkbox' 
                    value={item.value}
                    onChange={e => this.handleChange(e)}/>
                <label htmlFor={item.value}>{item.text}</label>
            </li>
            ))} 
        </ul>
        <button className={styles.button} onClick={this.handleClick}>{this.state.menu.button}</button>
      </Side>
      
    );
  }
}