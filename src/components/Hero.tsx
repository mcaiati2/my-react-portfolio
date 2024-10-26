import {useState, useEffect} from 'react';
import axios from 'axios';

function Hero() {
    const [quote, setQuote] = useState('Loading...')
    const url = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
    const apiKey = 'OSQFnPo3Rdpb4EkVN2yIYg==Ynp7X1zAOb47qGta';

    // when the component loads (once), I want to: 
    useEffect(() => {
        axios.get(url, {
            headers: {
                'X-Api-Key': apiKey
            }
        }).then((res) => {
            setQuote(res.data[0].quote)
        });
    }, []);
    // you can't use await inside useEffect

    //parentheses to write multiple lines of html
    return (
        <section className="hero">
        <div className="image"></div>
        <div className="hero-text">
            <h4>Software Developer</h4>
            <p>Code or something!</p>
            <p className="text-center">{quote}</p>
        </div>
        <div>
        </div>
        </section>
    )
}

export default Hero;
