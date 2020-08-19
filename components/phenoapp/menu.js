import styles from '../../styles/phenoapp.module.css'

export default function Menu({ menu, Disabled, Checked, changeFn }) {
    if (menu.id == 'base') {
        return (
            <form className={styles.menucontainer}>
                <h2 className={styles.menutitle}>MENU</h2>
                {menu.menuitem.map((item) => (
                    <div key={item.base}>
                        <label className={styles.menuitem}  htmlFor={item.base}>
                        <input
                            name={menu.id}
                            checked={base === item.base}
                            className={styles.input}
                            basevalue={item.base}
                            type='radio' 
                            onChange={changeFn}
                            />
                            {item.text}
                        </label>
                        <br/>
                    </div>))}
            </form>
        )
    } else {
        return (
            <form className={styles.menucontainer}>
                <h2 className={styles.menutitle}>MENU</h2>
                {menu.menuitem.map((item) => (
                    <div key={item.base}>
                        <label className={styles.menuitem}  htmlFor={item.base}>
                        <input
                            name={menu.base}
                            checked={!!Checked[item.base]}
                            disabled={!!Disabled[item.base]}
                            className={styles.input} 
                            type='checkbox' 
                            basevalue={item.base}
                            onChange={changeFn}
                            />
                            {item.text}
                        </label>
                        <br/>
                    </div>))}
            </form>
        )
    }
}