// 2595 X 2139 PIXELS
import React from "react";
// Layout template:
import Side from "../../../components/layouts/side";
// Individual components:
import Display from "../../../components/phenoapp/display";
import Menu from '../../../components/phenoapp/menu';
// Styling:
import styles from '../../../styles/phenoapp.module.css';

// 
Array.prototype.remove = function() {
  var what, a = arguments, L = a.length, ax;
  while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
          this.splice(ax, 1);
      }
  }
  return this;
};


export default class Phenoapp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedbase: 'BLANK', // base colour
      minormarking: [],          // minor white markings
      genes: [],           // All genes
      currentmenu: "start",
      menu: { 
        id: '',
        title: '',
        type: '',
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
    // Handler for the before button. Reloads menu.
    fetch(`http://localhost:3000/api/phenoapp/menu?id=${this.state.menu.before}`)
    .then(response => response.json())
    .then(data => this.setState({ 
      currentmenu: this.state.menu.before,
      menu: data, 
      isLoading: false 
    }))
    .catch(error => this.setState({ error, isLoading: false }));
  }

  handleNext = () => {
    // Handler for the NEXT button. Reloads menu.
    fetch(`http://localhost:3000/api/phenoapp/menu?id=${this.state.menu.next}`)
    .then(response => response.json())
    .then(data => this.setState({ 
      currentmenu: this.state.menu.next,
      menu: data, 
      isLoading: false 
    }))
    .catch(error => this.setState({ error, isLoading: false }));
  }




  handleChange = (e) => {

    // Handle changes made by the user with the menu.
    console.log('handleChange has been triggered.');
    let obj = this.state.isChecked;
    let baseValue = e.target.getAttribute('basevalue');

    if (this.state.menu.id === 'base') {
      this.setState({
          selectedbase: baseValue,
        }, () => {
          console.log(this.state);
        });

    } else if (this.state.menu.id === 'minormarking') {
      if (!this.state.minormarking.includes(baseValue)) {
        obj[baseValue] = 'checked';
        this.setState({
          minormarking: this.state.minormarking.concat(baseValue),
          isChecked: obj
        }, () => {
          console.log(this.state);
        });
        console.log("Added to the array: " + baseValue);
  
      } else {  
        obj[baseValue] = false;
        this.setState({
          minormarking: this.state.minormarking.filter(c => c !== baseValue),
          isChecked: obj
        }, () => {
          console.log(this.state);
        });
      }
    } else if (this.state.menu.id === 'dilutesMods') {
      if (!this.state.genes.includes(baseValue)) {
        if (this.state.genes.includes('nCr') && (baseValue == 'CrCr')) {
          obj[baseValue] = 'checked';
          obj['nCr'] = false;
          this.setState({
            genes: this.state.genes.remove('nCr'),
            isChecked: obj
          })
        } 
        if (this.state.genes.includes('CrCr') && (baseValue == 'nCr')) {
          obj[baseValue] = 'checked';
          obj['CrCr'] = false;
          this.setState({
            genes: this.state.genes.remove('CrCr'),
            isChecked: obj
          })
        }
        obj[baseValue] = 'checked';
        this.setState({
          genes: this.state.genes.concat(baseValue),
          isChecked: obj
        }, () => {
          console.log(this.state);
        });
        console.log("Added to the array: " + baseValue);
  
      } else {  
        obj[baseValue] = false;
        this.setState({
          genes: this.state.genes.filter(c => c !== baseValue),
          isChecked: obj
        }, () => {
          console.log(this.state);
        });
      }
    }
    
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(`http://localhost:3000/api/phenoapp/menu?id=${this.state.currentmenu}`)
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
              selectedbase={this.state.selectedbase}
              genes={this.state.genes}
              minormarking={this.state.minormarking}/>
          </div>
          
          <Menu 
            base={this.state.selectedbase} 
            menu={this.state.menu}
            Checked={this.state.isChecked}
            changeFn={e => this.handleChange(e)}/>

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
