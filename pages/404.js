import React, {useEffect} from 'react';
import {useRouter} from "next/router";

const index = () => {
    const router = useRouter()
    useEffect(()=>{

        setTimeout(()=>{
            router.push('/')
        },300)
    },[])
    return (
        <div>
            <h1 style={{color:"red"}}> 404 </h1>
        </div>
    );
};

export default index;