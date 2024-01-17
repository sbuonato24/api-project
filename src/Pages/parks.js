import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { queries } from '@testing-library/react';
import "./breaking.css";

//this file creates the page that displays the parks and rec quote and picture
const Parks = () => {
    const [image, setImage]=useState('')
    const [quote, setQuote]=useState('')

    useEffect(()=>{
        axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
            .then(res=>{
                console.log(res)
                setQuote(res.data);
            })
            .catch(err=>{
                console.log(err);
            })
    },[])

    const apiKey = 'AIzaSyB8ZA3u7oh1KRaDC0Kv4MFUNj6VlKgY9VE';
    const cx = '36217ac0d82c34120';
    const query ='Ron Swanson Parks and Rec photo';

    const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${query}&cx=${cx}&key=${apiKey}&searchType=image`;
    
    useEffect(()=>{
    axios.get(apiUrl)
        .then(res => {
            console.log(res);
            setImage(res.data.items[2].link);
            console.log(res.data.items[2].link)
        })
        .catch(err => {
            console.log(err);
        });
        }, [apiUrl]);
    
    return (
        <html>
            <head>
                <title>Parks and Rec</title>
            </head>
            <body>
            <h1 class="title">Parks and Rec</h1>
            <p class="bad">"{quote}"</p>
            <p class="bad">- Ron Swanson</p>
            <p class="bad">{image && <img src={image} alt={'author image'} style={{ maxWidth: '300px', borderRadius: '0%', border: '2px solid blue' }} />}</p>
            </body>
        </html>
    )
};

export default Parks;