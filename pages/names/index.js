import React from 'react';
import Head from "next/head";
import style from '../../styles/Home.module.css'
import Link from "next/link";
import fetching from "@/utils/fetching";


const Index = ({names}) => {
    return (
        <div className={style.main}>
            <Head>
                <title>new app || names</title>
            </Head>
            <div>

                <ul>
                    {
                        !!names.length?names.map(({id, name}) => <li key={id}><Link
                            href={`/names/${id}`}
                            as={`/names/${id}`}
                        >{id}: {name}</Link></li>):<p>none</p>
                    }
                </ul>
            </div>

        </div>
    );
};
export async function getServerSideProps() {
       const data = await fetching('names')


    return {
        props: {
            names : data
        },
    }
}

export default Index;