import React from 'react';
import Head from "next/head";
import Image from "next/legacy/image";

import style from '../../styles/Home.module.css'
import fetching from '../../utils/fetching'
import Link from "next/link";

export async function getStaticProps() {
    const data = await fetching('todos')

    return {
        props: {
            todos : data
        },
    }
}
const Todos = ({todos}) => {
    return (
        <div className={style.main}>
            <Head>
                <title>new app || todos</title>
            </Head>
            <ul className={style.cardList}>
                {
                    todos.map(({id, title , image}) =>
                        (
                            <li key={id} >
                                <Link
                                    href={{pathname: `/todos/${id}`, query:{ title:`${title}`} } }
                                    as={`/todos/${id}`}
                                    className={style.card}>
                                        <Image
                                            className={style.image}
                                            src={image}
                                            alt={'img'}
                                            layout="fill"
                                            objectFit="cover"
                                            objectPosition="center"
                                            priority={true}
                                        />
                                    <div className={style.cardText}>
                                        {id}: {title}
                                    </div>
                                </Link>
                            </li>)
                    )
                }
            </ul>

        </div>
    );
};

export default Todos;