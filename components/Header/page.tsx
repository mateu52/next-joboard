import Link from "next/link"
import styles from '../../styles/header.module.css'

export const Header = () => {
    return (
        <div className="p-2">
            <ul className={styles.ul}>
                <li className="pr-2"><Link href={'/'}>App</Link></li>
                <li><Link href={'/home'} >Home </Link></li>
                <li className="pl-2"><Link href={'/contact'} > contact </Link></li>
            </ul>
        </div>
    )
}