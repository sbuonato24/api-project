import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { queries } from '@testing-library/react';

const Breaking = () => {
    
    const [image, setImage]=useState('')
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

    const apiKey = 'AIzaSyB8ZA3u7oh1KRaDC0Kv4MFUNj6VlKgY9VE';
    const cx = '36217ac0d82c34120';
    const query = author + " breaking bad character picture ";

    const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${query}&cx=${cx}&key=${apiKey}&searchType=image`;
    
    useEffect(()=>{
    axios.get(apiUrl)
        .then(res => {
            console.log(res);
            setImage(res.data.items[0].link);
        })
        .catch(err => {
            console.log(err);
        });
        }, [apiUrl]);
    
    return (
        <div>
            <h1>Breaking Bad Quote:</h1>
            <p>{quote}</p>
            <p>{author}</p>
            {image && <img src={image} alt={'author image'} style={{ maxWidth: '3000px', borderRadius: '0%' }} />}
        </div>
    )
    
}

export default Breaking;

