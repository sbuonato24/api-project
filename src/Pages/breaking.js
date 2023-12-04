import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { queries } from '@testing-library/react';

const Breaking = () => {
    const [quote, setQuote]=useState('')
    const [author, setAuthor]=useState('')
    useEffect(()=>{
        axios.get('https://api.breakingbadquotes.xyz/v1/quotes')
            .then(res=>{
                console.log(res)
                setQuote(res.data[0].quote);
                setAuthor(res.data[0].author);
            })
            .catch(err=>{
                console.log(err);
            })
    },[])
    const [picture, setPicture]=useState('')
    useEffect(()=>{
        axios.get('https://www.breakingbadapi.com/api/')
            .then(res=>{
                console.log(res)
                ;
            })
            .catch(err=>{
                console.log(err);
            })
    },[])
    return (
        <div>
            <h1>Breaking Bad Quote:</h1>
            <p >{quote}</p>
            <p>{author}</p>
        </div>
    )
}

export default Breaking;