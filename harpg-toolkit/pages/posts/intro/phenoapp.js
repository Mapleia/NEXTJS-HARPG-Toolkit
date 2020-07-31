// 2595 X 2139 PIXELS
import React from "react";

import Side from "../../../components/layouts/side";
import Display from "../../../components/phenoapp/display";
import styles from '../../../styles/phenoapp.module.css';

export default class Phenoapp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedbase: ['BLANK'],
      markings: [],
      menuID: "start",
      menu: { 
        id: '',
        title: '',
        button: '',
        beforebtn: undefined,
        menuitem: [],
        next: '',
        before: ''
      },
      isLoading: false,
      error: null,
    };
  }

  handleBefore = () => {
    console.log('Click handled.');
    console.log(this.state.menuID);
    if (this.state.menuID === 'base') {
      if (selectedbase.includes(e.target.value)) {
        this.setState({ isChecked: true })
      }

    } else if (this.state.menuID === 'marking') {
      if (markings.includes(e.target.value)) {
        this.setState({ isChecked: true })
      }
    }

    fetch(`http://localhost:3000/api/phenoapp/menu?id=${this.state.menu.before}`)
    .then(response => response.json())
    .then(data => this.setState({ 
      menuID: this.state.menu.before,
      menu: data, 
      isLoading: false 
    }))
    .catch(error => this.setState({ error, isLoading: false }));
  }

  handleNext = () => {
    console.log('Click handled.');

    fetch(`http://localhost:3000/api/phenoapp/menu?id=${this.state.menu.next}`)
    .then(response => response.json())
    .then(data => this.setState({ 
      menuID: this.state.menu.next,
      menu: data, 
      isLoading: false 
    }))
    .catch(error => this.setState({ error, isLoading: false }));
  }

  handleChange = (e) => {
    console.log('Change handled.');

    if (this.state.menuID === 'base') {
      if (!this.state.selectedbase.includes(e.target.value)) { 
        this.setState({selectedbase: this.state.selectedbase.concat(e.target.value)}, () => {
          console.log(this.state.selectedbase);
        });
        console.log("Added to the array: " + e.target.value);
  
      } else if ( !((this.state.selectedbase.length == 1) && (this.state.selectedbase.includes('BLANK'))) ) {
        // If array is not ['BLANK']
  
        const index = this.state.selectedbase.indexOf(e.target.value);
  
        if ((index > -1)) {
          this.setState({selectedbase: this.state.selectedbase.filter(function(colour) {
            return colour !== e.target.value
          }
          )}, () => {
            console.log(this.state.selectedbase);
          });
        }
      }
    } else if (this.state.menuID === 'marking') {
      if (!this.state.markings.includes(e.target.value)) { 
        this.setState({markings: this.state.markings.concat(e.target.value)}, () => {
          console.log(this.state.markings);
        });
        console.log("Added to the array: " + e.target.value);
      } else {
        const index2 = this.state.markings.indexOf(e.target.value);
        if ((index2 > -1)) {
          this.setState({markings: this.state.markings.filter(function(marking) {
            return marking !== e.target.value
          }
          )}, () => {
            console.log(this.state.markings);
          });
        }
      }
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
        <div className={styles.gridcontainer}>
          <div className={styles.titlecontainer}>
            <h1 className={styles.title}>{this.state.menu.title}</h1>
          </div>

          <div className={styles.displaycontainer}>
            <Display 
              className={styles.display}
              id={this.state.selectedbase[this.state.selectedbase.length - 1]}>
                { this.state.markings.map((item) => (
                  <img className={styles.underlay} key={item} src={'/white_marking/' + item + '.png'}/>))}
            </Display>
          </div>

          <ul className={styles.menucontainer}>
            <li className={styles.menutitle}>MENU</li>
            { this.state.menu.menuitem.map((item) => (
              <li className={styles.menuitem} key={item.value}>
                  <input 
                    className={styles.input} 
                    type='checkbox' 
                    value={item.value} 
                    onChange={e => this.handleChange(e)}/>
                  <label className={styles.label} htmlFor={item.value}>{item.text}</label>
              </li>))}
          </ul>

          <div className={styles.bottomcontainer}></div>

          <div className={styles.buttonarea}>
            <button className={styles.button} onClick={this.handleBefore}>{this.state.menu.beforebtn}</button>
            <button className={styles.button} onClick={this.handleNext}>{this.state.menu.button}</button>
          </div>
        </div>      
      </Side>
    );
  }
}