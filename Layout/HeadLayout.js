import React from 'react';
import Link from "next/link";
import Head from "next/head";
import style from 'styles/Home.module.css'
const HeadLayout = ({children}) => {
    return (
        <div>
            <Head>
                <title>new app </title>
                <meta name="description" content="my app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/like.png" />
            </Head>
            <nav className={style.header}>
                <Link href={'/'} as={'main'}>main</Link>
                <Link href={'/names'} as={'names'}>names</Link>
                <Link href={'/todos'} as={'todos'}>todos</Link>
            </nav>
            {children}
            <div className={style.footer}>
                footer
            </div>
        </div>

    );
};

export default HeadLayout;