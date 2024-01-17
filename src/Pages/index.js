import React from 'react';
import ReactDom from 'react-dom';
import "./breaking.css";

//this file creates the home page
const Home = () => {
    return (
        <html>
            <head>
                <title>Home</title>
            </head>
            <body>
                <h1 class="title">TV Show Quote Generator</h1>
                <p class ="bad">Click on "Breaking Bad" or "Parks and Rec" in the navigation bar to generate a quote from that show.</p>
                <p style={{ textAlign: 'center' }}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Popcorn.svg/1455px-Popcorn.svg.png" alt="popcorn" style={{ maxWidth: '300px', borderRadius: '0%', borderColor: 'red', borderWidth: '10'}}/></p>

            </body>
        </html>
    )
};

export default Home;