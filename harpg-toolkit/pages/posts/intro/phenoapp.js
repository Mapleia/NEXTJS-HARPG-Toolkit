// 2595 X 2139 PIXELS

import Side from "../../../components/layouts/side";
import Menutitle from '../../../components/phenoapp/menutitle'
import Horsecontainer from '../../../components/phenoapp/horsecontainer'
import Button from '../../../components/phenoapp/button'
import styles from '../../../styles/phenoapp.module.css'


export default function intro() {
  return (
    <Side>
      <div className={styles.container}>
        <Menutitle id={'start'}/>
        <Horsecontainer/>
      </div>
      <Button id={'start'}/>
    </Side>
  );
}
