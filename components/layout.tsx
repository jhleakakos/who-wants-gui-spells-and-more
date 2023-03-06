import Footer from './footer'
import Navbar from './navbar';
import { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar/>
            <main>{ children }</main>
            <Footer/>
        </>
    )
}

export default Layout;