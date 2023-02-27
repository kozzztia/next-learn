import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import axios from "axios";
import style from '../../styles/Home.module.css'

async function fetchData(id) {
    const userData = await axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    return userData.data
}
const user= () => {
    const [user , setUser] = useState([])
    const path = useRouter();
    const userId =  path.query.id;
    useEffect( ()=>{
            fetchData(userId).then(res => setUser(res))
        },[])
    if(!!user){
        return (
            <div className={style.main}>
                <h2>{user.id} : {user.name}</h2>
                <h2>{user.email}</h2>
            </div>
        );
    }else{
        return (
            <div className={style.main}>
                <h1 style={{color :"red"}}>try to find....</h1>
            </div>
        );
    }

};

    export default user;