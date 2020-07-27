// 2595 X 2139 PIXELS

import Side from "../../../components/layouts/side";
import Menutitle from '../../../components/phenoapp/menutitle';
import Display from '../../../components/phenoapp/horsedisplay';

import React from 'react';
import useSwr from 'swr';

// import Button from '../../../components/phenoapp/button'

const fetcher = (url) => fetch(url).then((res) => res.json());


export default class Phenoapp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedbase: 'chestnut',
        menuID: 'start',
        menu: this.fetchMenu(this.menuID),
    };
  }

  fetchMenu({ id }) {
    const { data, error } = useSwr(`/api/phenoapp/menu?id=${id}`, fetcher)

    return {
      mData: data,
      isLoading: !error && !data,
      isError: error
    }
  }

  Title() {
    if(this.menu == isLoading) return <h1>Loading...</h1>
    return <h1>{this.menu.title}</h1>
  }

  handleClick() {

  }

  render() {
    return (
      <Side>
        <Title/>
        <Display/>
        <button onClick={handleClick}/>
      </Side>
    )
  }
}
