import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { queries } from '@testing-library/react';


const Parks = () => {
    const [quote, setQuote]=useState('')
    useEffect(()=>{
        axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
            .then(res=>{
                console.log(res)
                setQuote(res.data[0]);
            })
            .catch(err=>{
                console.log(err);
            })
    },[])
    return (
        <div>
            <h1>Parks and Rec Quote:</h1>
            <p>{quote}</p>
            <p>Ron Swanson</p>
        </div>
    )
};

export default Parks;