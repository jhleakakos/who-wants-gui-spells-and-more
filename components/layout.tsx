import Footer from './footer'
import Navbar from './navbar';
import { FunctionComponent, ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar/>
            <main>{ children }</main>
            <Footer/>
        </>
    )
}

export default Layout;