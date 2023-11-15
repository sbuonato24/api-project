import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Breaking = () => {
    useEffect(()=>{
        axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err);
            })
    },[])
    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
        </div>
    )
}

export default Breaking;