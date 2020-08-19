import styles from './display.module.css';
import React from 'react';

export default class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '/base/blank.png',
            hair: '/base/blank.png',
            hoof: '/base/blank.png',
            skin: '/base/blank.png',
            eye: '/base/blank.png',
            error: null,
            isLoading: false,
        }
    }

    componentDidUpdate(prevProps) {
        if ((prevProps.genes !== this.props.genes) || (prevProps.selectedbase !== this.props.selectedbase)) {
            this.setState({ isLoading: true });

            var genestext = null;
            console.log(this.props.genes)
            if(this.props.genes.length > 0) {
                genestext = this.props.genes.toString();
            }
                
            var link = `http://localhost:3000/api/phenoapp/colour?base=${this.props.selectedbase}&gene=`+ genestext;
            console.log('Colour API link: ' + link)
            fetch(link)
            .then(res => res.json())
            .then(data =>
                this.setState(prevState => ({
                    ...prevState,
                    img:  data.img != undefined ? data.img : prevState.img,  
                    hair: ((data.hair != undefined) && (prevState.hair != '/hair/SILVERHAIR.png')) ? data.hair : prevState.hair,
                    hoof: data.hoof != undefined ? data.hoof : prevState.hoof,
                    skin: data.skin != undefined ? data.skin : prevState.skin,
                    eye:  data.skin != undefined ? data.skin : prevState.skin,
                    isLoading: false,
                }))
            )
            .catch(err => this.setState({error: err, isLoading: false}));
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
            <img className={styles.underlay} src={this.state.img} />
            <img className={styles.underlay} src={this.state.hair} />
            { 
                this.props.minormarking.map((item) => (
                    <img 
                        className={styles.underlay} 
                        key={item} src={'/white_marking/' + item + '.png'}/>
                ))
            }
            <img className={styles.underlay} src={this.state.hoof} />
            <img className={styles.underlay} src={this.state.skin} />
            <img className={styles.underlay} src={this.state.eye} />
            <img className={styles.lineart} src='/base/LINEART.png'/>
            </div>
        )
    } 

}