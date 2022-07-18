import { Rocket } from 'phosphor-react'
import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Rocket size={36}/>
                <p>to<span>do</span></p>
            </div>
        </header>
    )
}