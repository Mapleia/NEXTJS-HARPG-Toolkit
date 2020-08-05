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
      isChecked: {},
      isLoading: false,
      error: null,
    };
  }

  handleBefore = () => {
    console.log('handleBefore has been triggered.');
    console.log(this.state.menuID);

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
    console.log('handleNext has been triggered.');

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
    console.log('handleChange has been triggered.');
    let index;
    let obj = this.state.isChecked;
    if (this.state.menuID === 'base') {
      if (!this.state.selectedbase.includes(e.target.value)) {
        obj[e.target.value] = 'checked';
        this.setState({
          selectedbase: this.state.selectedbase.concat(e.target.value),
          isChecked: obj
        }, () => {
          console.log(this.state);
        });
          
      console.log("Added to the array: " + e.target.value);
    
      } else if ( !((this.state.selectedbase.length == 1) && (this.state.selectedbase.includes('BLANK'))) ) {
          // If array is not ['BLANK']
          index = this.state.selectedbase.indexOf(e.target.value);
          obj[e.target.value] = false;
          if ((index > -1)) {
            this.setState({
              selectedbase: this.state.selectedbase.filter(colour => colour !== e.target.value),
              isChecked: obj
            }, () => {
              console.log(this.state);
            });
          }
      }

    } else if (this.state.menuID === 'marking') {
      if (!this.state.markings.includes(e.target.value)) {
        obj[e.target.value] = 'checked';
        this.setState({
          markings: this.state.markings.concat(e.target.value),
          isChecked: obj
        }, () => {
          console.log(this.state);
        });
        console.log("Added to the array: " + e.target.value);
  
      } else {  
        index = this.state.markings.indexOf(e.target.value);
        obj[e.target.value] = false;
        if ((index > -1)) {
          this.setState({
            markings: this.state.markings.filter(colour => colour !== e.target.value),
            isChecked: obj
            }, () => {
            console.log(this.state);
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
                    checked={!!this.state.isChecked[item.value]}
                    className={styles.input} 
                    type='checkbox' 
                    value={item.value} 
                    onChange={e => this.handleChange(e)}/>
                  <label className={styles.label} htmlFor={item.value} htmlFor={item.value}>{item.text}</label>
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