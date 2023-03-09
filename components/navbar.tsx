import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { FunctionComponent } from 'react';

const Navbar: FunctionComponent<{}> = () => {
    return (
        <div className={ styles.navbar }>
            <Link href={ '/' } className={ styles.link }>Get Me Outta Here</Link>
        </div>
    )
}

export default Navbar;