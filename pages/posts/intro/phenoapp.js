// 2595 X 2139 PIXELS
import React from "react";
// Layout template:
import Side from "../../../components/layouts/side";
// Individual components:
import Display from "../../../components/phenoapp/display";
import Menu from '../../../components/phenoapp/menu';
// Styling:
import styles from '../../../styles/phenoapp.module.css';

export default class Phenoapp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedbase: 'BLANK', // base colour
      minormarking: [],      // minor white markings
      genes: [],             // All dilutes and mods genes
      topgenes: [],          // Genes that go over top
      currentmenu: "start",
      menu: {
        id: 'start',
        title: 'Toolkit: Horse Phenotypes',
        type: 'checkbox',
        nextbtn: 'START',
        beforebtn: undefined,
        menuitem: [],
        next: 'base',
        before: undefined
      },
      isChecked: {},
      isDisabled: {},
      isLoading: false,
      error: null,
    };
  }

  handleButton = (name) => {
    fetch(`http://localhost:3000/api/phenoapp/menu?id=${this.state.menu[name]}`)
    .then(response => response.json())
    .then(data => this.setState({ 
      currentmenu: this.state.menu[name],
      menu: data, 
      isLoading: false 
    }))
    .catch(error => this.setState({ error, isLoading: false }));
  }

  // Used to disable Menu items depending on the selected base colour.
  // If Chestnut, disable nZ
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.selectedbase !== this.state.selectedbase) {
      let dis = this.state.isDisabled;
      if (this.state.selectedbase == 'chestnut') {
        dis['nZ'] = true;
        this.setState({ isDisabled: dis })
      
      } else if (this.state.isDisabled['nZ']) {
          dis['nZ'] = false;
          this.setState({ isDisabled: dis})
      }
    }
  }

  // Handle changes made by user interacted with the menu.
  handleMenu = (e) => {
    // Handle changes made by the user with the menu.
    console.log('handleChange has been triggered.');
    let chk = this.state.isChecked;
    let baseValue = e.target.getAttribute('basevalue');
    let arr = [];

    if (this.state.menu.id === 'base') {
      this.setState({
          selectedbase: baseValue,
        });

    } else if (this.state.menu.id === 'minorMarking') {
      // If minormarking doesn't already have the marking:
      if (!this.state.minormarking.includes(baseValue)) {
        // isChecked: {
        //   FETLOCK_4: 'checked',
        // }
        chk[baseValue] = 'checked';
        this.setState({
          minormarking: this.state.minormarking.concat(baseValue),
          isChecked: chk
        });  
      } else {  
        // If minormarking has the value, isChecked is false, and is removed from array
        chk[baseValue] = false;
        arr = this.state.minormarking;
        arr.remove(baseValue);

        this.setState({
          minormarking: arr,
          isChecked: chk
        });
      }
    } else if (this.state.menu.id === 'dilutesMods') {
      // If genes doesn't already have the gene: 
      if (!this.state.genes.includes(baseValue)) {
        if (this.state.genes.includes('nCr') && (baseValue == 'CrCr')) {
        // If genes has nCr, and user selected CrCr
          chk[baseValue] = 'checked';
          chk['nCr'] = false;

          arr = this.state.genes;
          arr.remove('nCr');
          arr.push(baseValue);

          this.setState({
            genes: arr,
            isChecked: chk
          })
        } else if (this.state.genes.includes('CrCr') && (baseValue == 'nCr')) {
          // If genes has CrCr, and user selected nCr
          chk[baseValue] = 'checked';
          chk['CrCr'] = false;

          arr = this.state.genes;
          arr.remove('CrCr');
          arr.push(baseValue);

          this.setState({
            genes: arr,
            isChecked: chk
          })
        } else {
          chk[baseValue] = 'checked';
          this.setState({
            genes: this.state.genes.concat(baseValue),
            isChecked: chk
          });
        }
      } else {
        // If genes does have the gene:  
        chk[baseValue] = false;
        arr = this.state.genes;
        arr = arr.remove(baseValue);

        this.setState({
          genes: arr,
          isChecked: chk
        });
      }
    } else if (this.state.menu.id === 'topMarkings') {
      // If topgenes doesn't already have the gene:
      if (!this.state.topgenes.includes(baseValue)) {
        chk[baseValue] = 'checked';
        this.setState({
          topgenes: this.state.topgenes.concat(baseValue),
          isChecked: chk
        })
      } else {
        chk[baseValue] = false;
        arr = this.state.topgenes;
        arr.remove(baseValue);

        this.setState({
          topgenes: arr,
          isChecked: chk
        });
      }
    }
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
              base={this.state.selectedbase}
              genes={this.state.genes}
              topgenes={this.state.topgenes}
              minormarking={this.state.minormarking}/>
          </div>
          
          <Menu 
            base={this.state.selectedbase}
            menu={this.state.menu}
            Disabled={this.state.isDisabled}
            Checked={this.state.isChecked}
            changeFn={(e) => {this.handleMenu(e)}}/>

          <div className={styles.bottomcontainer}></div>

          <div className={styles.buttonarea}>
            <button className={styles.button} onClick={() => {this.handleButton('before')}}>{this.state.menu.beforebtn}</button>
            <button className={styles.button} onClick={() => {this.handleButton('next')}}>{this.state.menu.nextbtn}</button>
          </div>
        </div>      
      </Side>
    );
  }
}
