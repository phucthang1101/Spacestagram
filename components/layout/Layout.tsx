import React, {  } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';

const Layout = (props: any) => {

    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout
