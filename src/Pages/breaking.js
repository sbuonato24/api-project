import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { queries } from '@testing-library/react';
import "./breaking.css";

//this file creates the breaking bad page that displays a quote from the show, the author, and the author's image
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
    const query = "breaking bad " + author + " character portrait";

    const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${query}&cx=${cx}&key=${apiKey}&searchType=image`;
    // document.p.style.color= "m"
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
        <html>
            <title>Breaking Bad</title>
            <body>
            <h1 class="title">Breaking Bad</h1>
            <p class="bad">"{quote}"</p>
            <p class="bad">- {author}</p>
            <p class="bad">{image && <img src={image} alt={'author image'} style={{ maxWidth: '300px', borderRadius: '0%', borderColor: 'blue', borderWidth: '10', border: '2px solid blue'}} />}</p> 
            </body>
        </html>
    )
};

export default Breaking;

