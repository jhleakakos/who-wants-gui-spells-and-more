import styles from '../styles/Footer.module.css';
import { FunctionComponent } from 'react';

const Footer: FunctionComponent<{}> = () => {
    return (
        <footer className={ styles.footer }>
            Powered by spells...for now
        </footer>
    )
}

export default Footer;