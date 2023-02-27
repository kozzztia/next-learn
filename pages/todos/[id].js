import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import style from '../../styles/Home.module.css'
import fetching from "@/utils/fetching";
import TodoCard from "@/components/TodoCard";

export const getStaticPaths = async () =>{
    const data = await fetching('todos');
    const paths = data.map(todo => {
        return{
            params : {id: todo.id}
        }
    })
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async (context) =>{
    const {id} = context.params;
    const data = await fetching(`todos/${id}`)

    return {
        props:{todo : data}
    }
}
const Card = ({todo}) => {
    const router = useRouter()
    const queryTitle = router.query.title
    return (
        <div className={style.main}>
            <h1>{queryTitle}</h1>
            <TodoCard data = {todo}/>
            <Link href={'/todos'} as={'/todos'}>back</Link>
        </div>
    );
};

export default Card;