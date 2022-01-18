import Head from 'next/head';
import React, { } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';

interface Props {
    title: string;
    children?: React.ReactNode;
};

const Layout = ({ title, children }: Props) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta
                    name="description"
                    content="Image-sharing social media from the final frontier."
                />
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout
