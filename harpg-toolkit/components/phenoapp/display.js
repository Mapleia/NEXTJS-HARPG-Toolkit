import styles from './display.module.css';
import React from 'react';

export default class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            COLOUR: {
                base: ['BLANK'],
                gene: '',
                img: '/base/blank.png',
                hair: '/base/blank.png',
                hoof: '/base/blank.png',
                skin: '/base/blank.png',
                eye: '/base/blank.png',
            },
            error: null,
            isLoading: false,
        }
    }

    componentDidUpdate(prevProps) {
        console.log('Genes not the same as previous?: ' + (this.props.genes !== prevProps.genes));
        console.log('selectedbase not the same as previous?: ' + (this.props.selectedbase !== prevProps.selectedbase));

        if ((this.props.genes !== prevProps.genes) || (this.props.selectedbase !== prevProps.selectedbase)) {
            this.setState({ isLoading: true });

            var genestext = null;
            console.log(this.props.genes)
            if(this.props.genes !== []) {
                genestext = this.props.genes.toString();
            }
            
            var link = `http://localhost:3000/api/phenoapp/colour?base=${this.props.selectedbase}&gene=`+ genestext;
            console.log('Colour API link: ' + link)
            fetch(link)
            .then(res => res.json())
            .then(data => this.setState({COLOUR: data, isLoading: false}, () => {
                    console.log(this.state);
                  }))
            .catch(err => this.setState({error: err, isLoading: false}))
            
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div className={styles.maincontainer}>
                    <img className={styles.greyscale} src='/base/GREYSCALE.png'/>
                    <img className={styles.lineart} src='/base/LINEART.png'/>
                </div>
            )
          
        }

        return (
            <div className={styles.maincontainer}>
            <img className={styles.greyscale} src='/base/GREYSCALE.png'/>
            <img className={styles.underlay} src={this.state.COLOUR.img} />
            <img className={styles.underlay} src={this.state.COLOUR.hair} />
            { 
                this.props.minormarking.map((item) => (
                    <img 
                        className={styles.underlay} 
                        key={item} src={'/white_marking/' + item + '.png'}/>
                ))
            }
            <img className={styles.underlay} src={this.state.COLOUR.hoof} />
            <img className={styles.underlay} src={this.state.COLOUR.skin} />
            <img className={styles.underlay} src={this.state.COLOUR.eye} />
            <img className={styles.lineart} src='/base/LINEART.png'/>
            </div>
        )
    } 

}