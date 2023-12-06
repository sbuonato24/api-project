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
    const options = {
        method: 'GET',
        url: 'https://wikimedia-image-search.p.rapidapi.com/wiki/',
        params: {
          query: 'Jesse Pinkman'
        }
    }
        try {
            res = axios.request(options);
            consolelog(res.data)
        } 
        catch (error) {
            console.log(err);
        }

    
}

export default Breaking;