import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className={ styles.navbar }>
            <Link href={ '/' }>Get Me Outta Here</Link>
        </div>
    )
}

export default Navbar;